import React from 'react';
import userApi from '../services/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeDataObject, getData} from "../utils/storage.js";


const UserContext = React.createContext();

const initialState = {
    isConnected: false,
    isLoading: true,
    error: false,
    errorMessage: "",
    isInitialized: false,
    isLoginScreen: true,
}

const UserProvider = ({ children }) => {
    const [authState, setAuthState] = React.useState(initialState)

    const register = async (username, email, firstname, lastname, password) => {
        setAuthState({
            ...authState,
            isLoading: true
        })

        const data = { username, email, firstname, lastname, password }

        const response = await userApi.register(data)

        if (response.data.error) {
            setAuthState({
                ...authState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        }
        else {
            setAuthState({
                ...authState,
                isLoading: false,
            })
        }
    };

    const login = async (email, password) => {
        setAuthState({
            ...authState,
            isLoading: true
        })
        const response = await userApi.login(email, password)

        if (response.token){
            storeDataObject('token',response.token)
        }

        if (response.error) {
            setAuthState({
                ...authState,
                isLoading: false,
                error: true,
                errorMessage: response.error.message
            })
            return
        }
    };

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if(value !== null) {
                return JSON.parse(value)
            }
        } catch(e) {
            console.log(e)
        }
    }

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <UserContext.Provider
            value={{
                register,
                login,
                getToken,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    return React.useContext(UserContext);
};

export { UserProvider, useUserContext };

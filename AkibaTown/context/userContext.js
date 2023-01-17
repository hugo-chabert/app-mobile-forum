import React from 'react';
import userApi from '../services/userApi';

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

    const login = async (email, password) => {
        setAuthState({
            ...authState,
            isLoading: true
        })
        const response = await userApi.login(email, password)

        if (response.data.error) {
            setAuthState({
                ...authState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
            return
        }
    };

    return (
        <UserContext.Provider
            value={{
                login,
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

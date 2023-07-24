import React from 'react';
import postApi from '../services/postApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostContext = React.createContext();

const initialState = {
    isLoading: true,
    error: false,
    errorMessage: "",
}

const PostProvider = ({ children }) => {
    const [postState, setPostState] = React.useState(initialState)

    const create = async (titre, message, id_user) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.create(titre, message, id_user)

        if (response.data.error) {
            setPostState({
                ...postState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setPostState({
                ...postState,
                isLoading: false,
            })
        }
    };

    const getAllPosts = async () => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.getAllPosts()

        if (response.data.error) {
            setPostState({
                ...postState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setPostState({
                ...postState,
                isLoading: false,
            })
        }
    }

    const getPostByID = async (id) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.getPostByID(id)
        console.log('RESPONSE ==', response.data);

        if (response.data.error) {
            setPostState({
                ...postState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setPostState({
                ...postState,
                isLoading: false,
            })
        }
    }

    const getAllPostsByUserID = async (userID) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.getAllPostsByUserID(userID)
        console.log('RESPONSE ==', response.data);

        if (response.data.error) {
            setPostState({
                ...postState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setPostState({
                ...postState,
                isLoading: false,
            })
        }
    }

    const getPostByTitle = async (title) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.getPostByTitle(title)
        console.log('RESPONSE ==', response.data);

        if (response.data.error) {
            setPostState({
                ...postState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setPostState({
                ...postState,
                isLoading: false,
            })
        }
    }

    return (
        <PostContext.Provider
            value={{
                create,
                getAllPosts,
                getPostByID,
                getAllPostsByUserID,
                getPostByTitle,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

const usePostContext = () => {
    return React.useContext(PostContext);
};

export { PostProvider, usePostContext };

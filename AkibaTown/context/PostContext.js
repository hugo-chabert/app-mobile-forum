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

    const create = async (titre, message, selected_anime, id_user) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.create(titre, message, selected_anime, id_user)
        console.log("Create post", response.data)

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

            return response.data.id;
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

    const getAllPostsByAnime = async (anime) => {
        setPostState({
            ...postState,
            isLoading: true
        })

        const response = await postApi.getAllPostsByAnime(anime)

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

import React from 'react';
import commentApi from '../services/commentApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommentContext = React.createContext();

const initialState = {
    isLoading: true,
    error: false,
    errorMessage: "",
}

const CommentProvider = ({ children }) => {
    const [commentState, setCommentState] = React.useState(initialState)

    const create = async (text, id_user, id_post) => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.create(text, id_user, id_post)

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    const getAllComments = async () => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.getAllComments()

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    const getCommentByID = async (id) => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.getCommentByID(id)

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    const getAllCommentsByUserID = async (id) => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.getAllCommentsByUserID(id)

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    const getAllCommentsByPostID = async (id) => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.getAllCommentsByPostID(id)

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    const deleteComment = async (id) => {
        setCommentState({
            ...commentState,
            isLoading: true
        })

        const response = await commentApi.deleteComment(id)

        if (response.data.error) {
            setCommentState({
                ...commentState,
                isLoading: false,
                error: true,
                errorMessage: response.data.error.message
            })
        } else {
            setCommentState({
                ...commentState,
                isLoading: false,
            })
        }
    };

    return (
        <CommentContext.Provider
            value={{
                create,
                getCommentByID,
                getAllComments,
                getAllCommentsByUserID,
                getAllCommentsByPostID,
                deleteComment,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

const useCommentContext = () => {
    return React.useContext(CommentContext);
};

export { CommentProvider, useCommentContext };

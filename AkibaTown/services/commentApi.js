import axios from "axios";
import { BASE_URL } from "../config/config";

async function create(text, postID, userID) {
    return await axios.post(`${BASE_URL}/comments/create`, {
        text: text,
        id_user: userID,
        id_post: postID,
    })
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR CREATE COMMENT ==', error.response);
            return error.response
        });
}

async function getAllComments() {
    return await axios.get(`${BASE_URL}/comments/all`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET ALL COMMENTS ==', error.response);
            return error.response
        });
}

async function getCommentByID(id) {
    return await axios.get(`${BASE_URL}/comments/${id}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET COMMENT BY ID ==', error.response);
            return error.response
        });
}

async function getAllCommentsByUserID(userID) {
    return await axios.get(`${BASE_URL}/comments/user/${userID}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET ALL COMMENTS BY USER ID ==', error.response);
            return error.response
        });
}

async function getAllCommentsByPostID(postID) {
    return await axios.get(`${BASE_URL}/comments/post/${postID}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET ALL COMMENTS BY POST ID ==', error.response);
            return error.response
        });
}

async function deleteComment(id) {
    return await axios.delete(`${BASE_URL}/comments/delete/${id}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR DELETE COMMENT ==', error.response);
            return error.response
        });
}

export default {
    create,
    getAllComments,
    getCommentByID,
    getAllCommentsByUserID,
    getAllCommentsByPostID,
    deleteComment,
}
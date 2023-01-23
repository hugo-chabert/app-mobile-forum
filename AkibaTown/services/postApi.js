import axios from "axios";
import { BASE_URL } from "../config/config";

async function create(titre, message, id_user) {
    return await axios.post(`${BASE_URL}/posts/create`, {
        titre: titre,
        message: message,
        id_user: id_user,
    })
        .then(async response => {
            console.log('RES CREATE POST ==', response);
            return response
        })
        .catch(error => {
            console.log('ERR CREATE POST ==', error.response);
            return error.response
        });
}

async function getAllPosts() {
    return await axios.get(`${BASE_URL}/posts/all`)
        .then(async response => {
            console.log('RES GET ALL POSTS ==', response.data);
            return response
        })
        .catch(error => {
            console.log('ERR GET ALL POSTS ==', error.response);
            return error.response
        });
}

async function getPostByID(id) {
    return await axios.get(`${BASE_URL}/posts/${id}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET POST BY ID ==', error.response);
            return error.response
        });
}

async function getAllPostsByUserID(userID) {
    return await axios.get(`${BASE_URL}/posts/user/${userID}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET POST BY USER ID ==', error.response);
            return error.response
        });
}

async function getPostByTitle(title) {
    return await axios.get(`${BASE_URL}/posts/title/${title}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR GET POST BY TITLE ==', error.response);
            return error.response
        });
}

async function deletePost(id) {
    return await axios.delete(`${BASE_URL}/posts/delete/${id}`)
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR DELETE POST ==', error.response);
            return error.response
        });
}

export default {
    create,
    getAllPosts,
    getPostByID,
    getAllPostsByUserID,
    getPostByTitle,
    deletePost,
}
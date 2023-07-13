import axios from "axios";
import { BASE_URL } from "../config/config";

async function login(email, password) {
    return await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
    })
        .then(async response => {
            return response
        })
        .catch(error => {
            console.log('ERR LOGIN ==', error.response);
            return error.response
        });
}

async function register(data) {
    return await axios.post(`${BASE_URL}/users/register`, data, { headers: { "Content-Type": "application/json" } })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log("ERR RES REGISTER ====", error.response);
            return error.response
        });
}

// async function update(username, email, id) {
//     return await axios.put(`${API_URL}/users/${id}`, {
//         username: username,
//         email: email
//     })
//         .then(response => {
//             return response
//         })
//         .catch(error => {
//             console.log('An error occurred:', error.response);
//             return error
//         });
// }

export {
    login,
    register,
    // update,
}
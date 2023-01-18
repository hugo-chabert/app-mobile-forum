import axios from "axios";
import { BASE_URL } from "../config/config";

async function login(email, password) {
    return await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
    })
        .then(async response => {
            // axios.defaults.headers["Authorization"] = "Bearer " + response.data.token
            console.log(response.data.token)
            return response
        })
        .catch(error => {
            console.log('ERR LOGIN ==', error.response);
            return error.response
        });
}

// async function register(data) {
//     return await axios.post(`${API_URL}/auth/local/register`, data, { headers: { "Content-Type": "application/json" } })
//         .then(response => {
//             storeData("authToken", response.data.jwt)
//             axios.defaults.headers["Authorization"] = "Bearer " + response.data.jwt
//             return response
//         })
//         .catch(error => {
//             console.log("ERR RES REGISTER ====", error.response);
//             return error.response
//         });
// }

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

// async function disconnect() {
//     axios.defaults.headers["Authorization"] = ""
//     // delete axios.defaults.headers.common["Authorization"]
//     await deleteData("authToken")
// }


export default {
    login,
    // register,
    // update,
    // disconnect
}
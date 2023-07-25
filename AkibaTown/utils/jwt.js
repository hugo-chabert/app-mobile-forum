import jwt_decode from 'jwt-decode';
import { getData } from './storage';

export const getUserDataFromToken = async () => {
    try {
        const token = await getData("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            if (decodedToken && decodedToken.result) {
                return decodedToken.result;
            } else {
                throw new Error("Invalid JWT token or missing user data.");
            }
        } else {
            throw new Error("No JWT token found.");
        }
    } catch (error) {
        console.error("Error while decoding JWT token:", error);
        return null; // or throw an error depending on your use case
    }
};

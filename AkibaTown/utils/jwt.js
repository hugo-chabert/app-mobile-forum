import jwt_decode from 'jwt-decode';
import { getData } from './storage';

export const getUserDataFromToken = async () => {
    try {
        const token = await getData("token");
        if (!token) {
            throw new Error("No JWT token found.");
        }

        const decodedToken = jwt_decode(token);
        if (!decodedToken || !decodedToken.result) {
            throw new Error("Invalid JWT token or missing user data.");
        }

        return decodedToken.result;
    } catch (error) {
        console.error(`Error while decoding JWT token: ${error}\nReturning false...`);
        return false
    }
};


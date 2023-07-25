import axios from "axios";
import { JIKAN_URL } from "../config/config";


const getAnimeByID = async (id) => {
    return await axios.get(`${JIKAN_URL}/anime/${id}`)
    .then(res => {
        // La structure de la réponse est : res.data.data.x
        // Jsp pourquoi il y a deux "data", mais ca m'a bien cassé les couilles
        const animeData = res.data.data;
        console.log(`1: Fetched anime: ${animeData.title}`);
        return animeData;
    })
    .catch(err => {
        console.log("ERROR:", err);
    })
}

const getAnimesByTitle = async (title) => {
    const body = {
        limit: 5,
        type: 'tv',
        order_by: 'popularity',
        letter: title
    };
    return await axios.get(`${JIKAN_URL}/anime`, body)
    .then(res => {
        res = res.data;
        console.log(`getAnimesByTitle() - Fetched anime found: ${res.data.size}`);
        return res.data;
    })
    .catch(err => {
        console.log(`getAnimesByTitle() - ERROR ${err.status}: ${err.message}`);
        return err;
    })
}


export default { getAnimeByID, getAnimeByTitle: getAnimesByTitle }
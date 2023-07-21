import React from "react";
import animeApi from "../services/animeApi";

const AnimeContext = React.createContext();

const AnimeProvider = ({ children }) => {

    const getAnimeByID = async (id) => {
        
    }

    const getAnimeByTitle = async (title) => {
        await animeApi.getAnimeByTitle(title)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    }

    return (
        <AnimeContext.Provider
            value={{
                getAnimeByID,
                getAnimeByTitle,
            }}
        >
            {children}
        </AnimeContext.Provider>
    )
}

const useAnimeContext = () => {
    return React.useContext(AnimeContext);
}

export { AnimeProvider, useAnimeContext }
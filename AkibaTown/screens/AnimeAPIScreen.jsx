import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";

import { useAnimeContext } from "../context/AnimeContext";
import animeApi from "../services/animeApi";


export const AnimeAPIScreen = ( props ) => {
    const [animeData, setAnimeData] = React.useState({})

    const getAnimeData = async (id) => {
        try {
            const response = await animeApi.getAnimeByID(id);
            return response;
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    React.useEffect(() => {
        
        getAnimeData(animeID)
        .then(data => {
            setAnimeData(data);
        })

        console.log(animeData)
    }, [])

    return (
        <View>
            <Text style={{ 
                textAlign: 'center', 
                marginVertical: '50%',
                fontWeight: 'bold'
            }}>
                {animeData ? animeData?.title : "Loading..."}
            </Text>
            <Image source={{ uri: animeData?.images?.jpg?.image_url }} />
        </View>
    )
}
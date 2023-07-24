import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";

import { useAnimeContext } from "../context/AnimeContext";
import animeApi from "../services/animeApi";
import AnimeSearchFilter from "./AnimeSearchFilter";


export const AnimeSearchBar = () => {
    const [input, setInput] = React.useState('')
    const [searchAnimeData, setSearchAnimeData] = React.useState([])
    const [animeData, setAnimeData] = React.useState({})

    const searchAnime = async (str) => {
        try {
            const response = await animeApi.getAnimeByTitle(str);
            return response;
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    const handleAnimePress = (animeData) => {
        setAnimeData(animeData)
    }

    const getAnimeData = async (id) => {
        try {
            const response = await animeApi.getAnimeByID(id);
            return response;
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    React.useEffect(() => {
        
        // getAnimeData(props.route.params.animeID)
        // .then(data => {
        //     setAnimeData(data);
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        searchAnime(input)
        .then(data => {
            setSearchAnimeData(data);
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                style={{
                    fontSize: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgrey',
                    backgroundColor: '#e6e6e6', 
                    width: 300, 
                    height: 50, 
                    marginTop: 150,
                    padding: 10, 
                }}
                placeholder="Search..."

                value={input}
                onChangeText={text => setInput(text)}
            />

            <AnimeSearchFilter data={searchAnimeData} input={input} onAnimePress={handleAnimePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})
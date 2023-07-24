import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useAnimeContext } from "../context/AnimeContext";
import animeApi from "../services/animeApi";
import AnimeSearchFilter from "./AnimeSearchFilter";


export const AnimeSearchBar = () => {
    const [input, setInput] = React.useState('')
    const [searchAnimeData, setSearchAnimeData] = React.useState([])
    const [animeData, setAnimeData] = React.useState({})
    const [searchValue, setSearchValue] = React.useState('')

    const searchAnime = async (str) => {
        try {
            const response = await animeApi.getAnimeByTitle(str);
            return response;
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    const handleAnimePress = (_animeData) => {
        setAnimeData(_animeData)
        setSearchValue(_animeData.title)
    }


    React.useEffect(() => {
        
        searchAnime(input)
        .then(data => {
            setSearchAnimeData(data);
        })
        .catch(err => {
            console.log(err)
        })

    }, [input])

    return (
        <View 
            style={styles.container}
        >
            <TextInput
                style={styles.textInput}
                placeholder="Search..."

                value={searchValue === '' ? input : searchValue}
                onChangeText={text => setInput(text)}
                onFocus={() => {
                    setSearchValue('')
                    setInput('')
                }}
            />

            <AnimeSearchFilter data={searchAnimeData} input={input} onAnimePress={handleAnimePress}/>
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
    },
    textInput: {
        fontSize: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        backgroundColor: '#e6e6e6', 
        width: 300, 
        height: 50, 
        marginTop: 20,
        padding: 10, 
    }
})
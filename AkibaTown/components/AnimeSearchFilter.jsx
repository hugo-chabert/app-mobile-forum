import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Touchable,
    SectionList
} from 'react-native'
import React from 'react'

const AnimeSearchFilter = ({ data, input, onAnimePress }) => {

    const handlePress = (animeData) => {
        // console.log(`ID ${animeData.mal_id} - "${animeData.title}"`);
        // console.log("onAnimePress", animeData)
        onAnimePress(animeData);
    }

    return (
        <ScrollView style={{ height: 200 }}>
            {data.map(item => {
                if(input === "") {
                    return (
                        <TouchableOpacity
                            key={item.mal_id}
                            style={styles.container}
                            onPress={() => {
                                handlePress(item)
                            }}
                        >
                            <Image
                                source={{ uri: item.images.jpg.image_url }} 
                                resizeMode="contain"
                                style={{ width: 50, aspectRatio: 1 }}
                            />
                            <Text style={{ alignSelf: 'center', fontStyle: 'italic' }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }

                if(input !== "") {
                    if(item?.title.toLowerCase().startsWith(input.toLowerCase())) {
                        return (
                            <TouchableOpacity
                                item={item.mal_id}
                                style={styles.container}
                                onPress={() => {
                                    handlePress(item)
                                }}
                            >
                                <Image
                                    source={{ uri: item.images.jpg.image_url }} 
                                    resizeMode="contain"
                                    style={{ width: 50, aspectRatio: 1 }}
                                />
                                <Text style={{ alignSelf: 'center', fontStyle: 'italic' }}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }
                }
            })}
        </ScrollView>
    )
}

export default AnimeSearchFilter

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e6e6e6',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        width: 300,
    }
})
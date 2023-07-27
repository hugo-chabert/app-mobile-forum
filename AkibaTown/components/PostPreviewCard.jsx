import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Post, Props } from '../constants/Interfaces';
import userApi from '../services/userApi';


const PostPreviewCard = ({ type, data, navigation }) => {

    React.useEffect(() => {
        
    }, []);


    if (type === 'post') {
        return (
            <TouchableOpacity>
                <View style={styles?.container}>
                    <Text style={{ fontWeight: 'bold', overflow: 'hidden' }} numberOfLines={1}>
                        {data?.titre}
                    </Text>
                    <Text style={{ fontStyle: 'italic', color: 'grey', overflow: 'hidden' }} numberOfLines={1}>
                        Posté dans "{data.selected_anime}"
                    </Text>
                    <View style={{ width: 280, marginHorizontal: 'auto', borderWidth: 1, borderColor: '#d9d9d9' }}></View>
                    <Text style={{ overflow: 'hidden', marginTop: 5, marginLeft: 5 }} numberOfLines={7}>
                        {data?.message}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    else if (type === 'message') {
        return (
            <View style={styles?.container}>
                <Text style={{ color: 'grey', fontSize: 18 }}>
                    « {data?.content} »
                </Text>
                <View style={{ height: 5 }}></View>
                <Text>
                    Posté par <Text style={{ textDecorationLine: 'underline' }}>{data?.author}</Text> le {data?.date} dans <Text style={{ fontWeight: 'bold' }}>{data?.forumName}</Text>
                </Text>
            </View>
        )
    }

    else if (type === 'user') {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold' }}>
                    {data?.username} <Text style={{ fontWeight: 'normal' }}>à rejoint le {data?.registerDate}</Text>
                </Text>
            </View>
        )
    }

    else {
        return <Text>No content to display.</Text>
    }
}

export default PostPreviewCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        margin: 10,
        width: 300,
        height: "90%",
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },
})
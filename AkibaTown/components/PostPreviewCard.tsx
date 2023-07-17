import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post, Props } from '../constants/Interfaces';


const PostPreviewCard = ({ type, dataToShow, navigation }: Props) => {


    if (type === 'post') {
        return (
            <View style={styles?.container}>
                <View>
                    <Text style={{ color: 'black', fontSize: 18 }}>
                        {dataToShow?.title}
                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {' '}
                            ({dataToShow?.msgAmount} messages)
                        </Text>
                    </Text>
                </View>
                <View style={{ height: 5 }}></View>
                <Text>
                    Posté par <Text style={{ textDecorationLine: 'underline' }}>{dataToShow?.author}</Text> le {dataToShow?.date} dans <Text style={{ fontWeight: 'bold' }}>{dataToShow?.forumName}</Text>
                </Text>
            </View>
        )
    }

    else if (type === 'message') {
        return (
            <View style={styles?.container}>
                <Text style={{ color: 'grey', fontSize: 18 }}>
                    « {dataToShow?.content} »
                </Text>
                <View style={{ height: 5 }}></View>
                <Text>
                    Posté par <Text style={{ textDecorationLine: 'underline' }}>{dataToShow?.author}</Text> le {dataToShow?.date} dans <Text style={{ fontWeight: 'bold' }}>{dataToShow?.forumName}</Text>
                </Text>
            </View>
        )
    }

    else if (type === 'user') {
        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold' }}>
                    {dataToShow?.username} <Text style={{ fontWeight: 'normal' }}>à rejoint le {dataToShow?.registerDate}</Text>
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
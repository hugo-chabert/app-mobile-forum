import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PostPreviewCard = ({ dataToShow, navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {dataToShow?.forumName}
                <View style={{height: 5}}></View>
                {dataToShow?.title} ({dataToShow?.msgAmount} commentaires)
            </Text>
            <View style={{height: 5}}></View>
            <Text>
                Posté par <Text style={{ textDecorationLine: 'underline' }}>{dataToShow?.author}</Text> le {dataToShow?.date}
            </Text>
        </View>
    )
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
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MessagePreviewCard = ({ dataToShow, navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text style={{color: 'grey', fontSize: 18}}>
                {dataToShow.content}
            </Text>
            <View style={{height: 5}}></View>
            <Text>
                Posté par <Text style={{ textDecorationLine: 'underline' }}>{dataToShow.author}</Text> le {dataToShow.date} dans <Text style={{ fontWeight: 'bold' }}>{dataToShow.forumName}</Text>
            </Text>
        </View>
    )
}

export default MessagePreviewCard

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
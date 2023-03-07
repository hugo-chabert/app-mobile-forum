import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MessageInfoCard = ({ data, navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text>{data?.title}</Text>
        </View>
    )
}

export default MessageInfoCard


const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'white'
    }
})
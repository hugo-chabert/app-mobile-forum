import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SideScroller = ({ navigation }) => {

    const bandHeader = (
        <View style={styles.bandHeader}>
            <Text style={{color: '#ffffff', textAlign: 'left', fontSize: 16}}>Title</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            {bandHeader}
            <View style={styles.content}>
            </View>
        </View>
    )
}

export default SideScroller

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    bandHeader: {
        width: "100%",
        height: 45,
        padding: 10,
        backgroundColor: 'grey',
    },
    content: {
        width: "100%",
        height: 200,
        backgroundColor: 'black',
    }
})
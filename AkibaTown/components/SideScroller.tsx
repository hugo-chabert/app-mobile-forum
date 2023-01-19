import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const SideScroller = (title: string, dataToShow: any, { navigation }: {navigation: any}) => {

    navigation = React.createRef();

    const bandHeader = (
        <View style={styles.bandHeader}>
            <Text style={{color: '#ffffff', textAlign: 'left', fontSize: 16}}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            {bandHeader}
            <ScrollView style={styles.content}>
                {dataToShow.map((item: any, index: number) => {
                    return (
                        <View key={index}>
                            <Text>{item?.content}</Text>
                            <Text>Posté par {item?.author} le {item?.date}</Text>
                        </View>
                    )
                })}
            </ScrollView>
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
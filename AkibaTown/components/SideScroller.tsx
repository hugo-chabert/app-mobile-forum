import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";


interface Post {
    content: string;
    author: string;
    date: string;
}

interface Props {
    title: string;
    dataToShow: Post[];
    navigation: any;
}


const SideScroller = ({title, dataToShow, navigation}: Props) => {

    const bandHeader = (
        <View style={styles.bandHeader}>
            <Text style={{color: '#ffffff', textAlign: 'left', fontSize: 16}}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            {bandHeader}
            <ScrollView style={styles.content}>
                {dataToShow.map((item?: any, index?: number) => {
                    return (
                        <TouchableOpacity 
                            key={index}
                            onPress={() => {
                                navigation.navigate('Post', {
                                    post: item
                                });
                            }}
                        >
                            <View style={styles.blogPreview}>
                                <Text>{item?.content}</Text>
                                <Text>Posté par {item?.author} le {item?.date}</Text>
                            </View>
                        </TouchableOpacity>
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
    blogPreview: {
    },
    content: {
        width: "100%",
        height: 200,
        backgroundColor: 'black',
    }
})
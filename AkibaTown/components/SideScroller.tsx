import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import PostPreviewCard from "./PostPreviewCard";

import { Post, Props } from '../constants/Interfaces';

const SideScroller = ({ title, dataToShow, navigation, type }: Props) => {

    const bandHeader = (
        <View style={styles.bandHeader}>
            <ImageBackground
                source={require('../assets/images/background.png')}
                style={styles.bg}
            ></ImageBackground>

            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                padding: 10,
            }}>
                <Text style={{ color: '#ffffff', textAlign: 'left', fontSize: 16 }}>{title}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            {bandHeader}
            <ScrollView style={styles.content} horizontal={true}>
                {dataToShow.map((post: Post, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index} onPress={() => navigation.navigate('Post', { post: post })}
                            style={[styles.content, { alignItems: 'flex-start' }]}>
                            <PostPreviewCard title="" type={type} dataToShow={post} navigation={navigation}/>
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
        marginBottom: 20,
    },
    bandHeader: {
        width: "100%",
        height: 40,
        backgroundColor: 'black',
    },
    content: {
        height: 200,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4
    }
})
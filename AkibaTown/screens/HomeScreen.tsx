import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

import SideScroller from '../components/SideScroller';
import { useNavigation } from '@react-navigation/native';

const searchIcon = require('../assets/images/icons/search.png')
const logo = require('../assets/images/AkibaTownLogo.png')
const profileIcon = require('../assets/images/icons/eye.png')


// FAKE DATA
const data = [
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "John Doe",
        date: "2021-01-01",
    },
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "Jane Doe",
        date: "2021-01-01",
    },
    {
        content: "djqpdjqjdpodkjpo zpopdi oz oqpo iqpozdiq ni izjqd",
        author: "Sylvain",
        date: "2021-01-01",
    },
]


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


const HomeScreen = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={searchIcon} style={styles.icon} />
                <Image source={logo} style={styles.mediumLogo} />
                <Image source={profileIcon} style={styles.icon} />
            </View>

            <ScrollView>
                <View style={styles.scrollers}>
                    <SideScroller
                        title="Derniers messages"
                        dataToShow={data}
                        navigation={navigation}
                    />
                    <SideScroller
                        title="Derniers sujets"
                        dataToShow={data}
                        navigation={navigation}
                    />
                    <SideScroller
                        title="Statistiques"
                        dataToShow={data}
                        navigation={navigation}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBD9DB'
    },
    mediumLogo: {
        width: 100,
        height: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    icon: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    scrollers: {

    },
});
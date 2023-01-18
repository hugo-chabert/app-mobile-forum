import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

import SideScroller from '../components/SideScroller';

const searchIcon = require('../assets/images/icons/search.png')
const logo = require('../assets/images/AkibaTownLogo.png')
const profileIcon = require('../assets/images/icons/eye.png')

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={searchIcon} style={styles.icon}/>
                <Image source={logo} style={styles.mediumLogo}/>
                <Image source={profileIcon} style={styles.icon}/>
            </View>

            <ScrollView>
                <View style={styles.scrollers}>
                    <SideScroller/>
                    <SideScroller/>
                    <SideScroller/>
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
});
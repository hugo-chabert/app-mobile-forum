import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

import SideScroller from '../components/SideScroller';
import fakeData from '../constants/FakeData';

const searchIcon = require('../assets/images/icons/search.png')
const logo = require('../assets/images/AkibaTownLogo.png')
const profileIcon = require('../assets/images/profile/zoro.jpg')
import { getData } from '../utils/storage';
import jwt_decode from "jwt-decode";

import { Post, Props } from '../constants/Interfaces';

const HomeScreen = ({ navigation }: any) => {
    const [token, setToken] = React.useState('');
    const [userData, setUserData] = React.useState({});

    const getTokenData = async () => {
        
    }

    React.useEffect(() => {
        
    }, [])

    const header = (
        <View style={styles.header}>
            <Image source={searchIcon} style={styles.icon} />
            <Image source={logo} style={styles.mediumLogo} />
            <Image source={profileIcon} style={styles.profileIcon} />
        </View>
    )

    return (
        <View style={styles.container}>
            {header}
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.scrollers}>
                        <SideScroller
                            title="Derniers messages"
                            type='message'
                            dataToShow={fakeData.messages}
                            navigation={navigation}
                        />
                        <SideScroller
                            title="Derniers sujets"
                            type='post'
                            dataToShow={fakeData.posts}
                            navigation={navigation}
                        />
                        <SideScroller
                            title="Derniers inscrits"
                            type='user'
                            dataToShow={fakeData.users}
                            navigation={navigation}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBD9DB',
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
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderColor: '#00b300',
        borderWidth: 2,
    },
    scrollers: {
        marginBottom: 120
    },
});
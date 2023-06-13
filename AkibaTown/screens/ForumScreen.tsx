import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Filter from '../components/Filter';

const searchIcon = require('../assets/images/icons/search.png')
const logo = require('../assets/images/AkibaTownLogo.png')
const profileIcon = require('../assets/images/profile/zoro.jpg')


const ForumScreen = ({ navigation }: any) => {
    const header = (
        <View style={styles.header}>
            <Image source={searchIcon} style={styles.icon} />
            <Image source={logo} style={styles.mediumLogo} />
            <Image source={profileIcon} style={styles.profileIcon} />
        </View>
    )

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
                <Text style={{ color: '#ffffff', textAlign: 'left', fontSize: 16 }}>Tous les Sujets</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            {header}
            <ScrollView style={{ marginBottom: 150 }}>
                {bandHeader}
                <Filter/>
            </ScrollView>
        </View>
    )
}

export default ForumScreen;

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
});
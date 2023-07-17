import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import backgroundStyle from '../constants/BackgroundStyle';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>
                Connecte-toi pour partager ton avis avec d'autres passionnés !
            </Text>
            
            <View style={styles.landingPage}>
                
            </View>
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    bigLogo: {
        width: 150,
        height: 150,
        // shadow
        shadowColor: '#ffffff',
        shadowRadius: 10,
        margin: 5,
    },
    landingPage: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
    },
    headline: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 28,
    },
    buttonsAndLabels: {
        alignItems: 'center',
        width: "45%"
    },
    standardButtons: {
        backgroundColor: '#fff',
        padding: 5,
        width: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#A51717',
    },
    normalText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 14,
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 14,
    },
});
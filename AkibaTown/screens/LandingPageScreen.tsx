import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

import backgroundStyle from '../constants/BackgroundStyle';

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/background.png')}
                style={backgroundStyle.bg}
            ></ImageBackground>
            <View style={styles.landingPage}>
                <Image 
                    source={require('../assets/images/AkibaTownLogo.png')}
                    style={styles.bigLogo}
                    />
            </View>
        </View>
    );
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    bigLogo: {
        width: 250,
        height: 250,
        // shadow
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    landingPage: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    }
});
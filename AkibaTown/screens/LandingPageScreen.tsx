import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/AkibaTownLogo.png')}
                style={styles.bigLogo}
            />
        </View>
    );
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBD9DB'
    },
    bigLogo: {
        width: 250,
        height: 250,
    }
});
import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import LandingPage from './LandingPageScreen';

const HomeScreen = ({ navigation }) => {
    

    return (
        // <View style={styles.container}>
        //     <Text>Home screen</Text>
        //     <Button
        //         title="Click here"
        //         onPress={() => alert('Button pressed')}
        //     />
            <LandingPage/>
        // </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBD9DB'
    },
});
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>News screen</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button pressed')}
            />
        </View>
    );
}

export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBD9DB'
    },
});
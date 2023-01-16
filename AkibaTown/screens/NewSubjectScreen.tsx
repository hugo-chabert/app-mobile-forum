import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewSubjectScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Create subject  screen</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button pressed')}
            />
        </View>
    );
}

export default NewSubjectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBD9DB'
    },
});
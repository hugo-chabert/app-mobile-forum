import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MessageInfoCard from '../components/MessageInfoCard';


const fixture = {
    username: "Musashi06",
    time: "3 min",
    comments: '14',
    
}

const NewsScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <MessageInfoCard data={fixture}/>
        </View>
    );
}

export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingVertical: 50,
        backgroundColor: '#DBD9DB'
    },
});
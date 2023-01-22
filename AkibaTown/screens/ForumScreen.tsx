import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ForumScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text>Forum screen</Text> */}
            {/* <Button
                title="Click here"
                onPress={() => alert('Button pressed')}
            /> */}
            <View style={styles.postsContainer}>
                <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                <View style={styles.postsItems}>
                    <FontAwesome
                        // name=""
                    />
                    <Text style={styles}>28 décembre 2022</Text>
                    {/* --------------------------------------------------- */}
                    <FontAwesome
                        name="comment"
                    />
                    <Text style={styles}>155 Réponses</Text>
                    {/* --------------------------------------------------- */}
                    <FontAwesome
                        name="heart"
                    />
                    <Text style={styles}>34</Text>
                </View>
            </View>
        </View>
    );
}

export default ForumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#DBD9DB'
    },

    postsContainer: {
        backgroundColor: 'red',
        height: 80,
        // borderTop:  1 "solid"
    },

    postsTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 2,
    },

    postsItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 330,
        paddingLeft: 25,
        marginTop: 20
    }
});
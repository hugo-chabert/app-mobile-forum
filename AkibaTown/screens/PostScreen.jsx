import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import { usePostContext } from '../context/PostContext';

export const PostScreen = ({ route }) => {
    const { id } = route.params
    const postContext = usePostContext();
    const currentPost = postContext.getPostByID(id);

    return (
        <View>
            <Text>Hello {self.name}!</Text>
        </View>
    )
}
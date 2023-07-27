import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import PostPreviewCard from "./PostPreviewCard";

const SideScroller = ({ title, data, navigation, type }) => {

    const [posts, setPosts] = React.useState();


    React.useEffect(() => {
        console.log("Data (SideScroller)", data)
        console.log("Posts (SideScroller)", posts)
        setPosts(data)
    }, [data])

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
                <Text style={{ color: '#ffffff', textAlign: 'left', fontSize: 16 }}>{title}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            {bandHeader}
            <FlatList
                horizontal
                style={styles.content}
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PostPreviewCard type={type} data={item} />
                )}
            />
        </View>
    )
}

export default SideScroller

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
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
})
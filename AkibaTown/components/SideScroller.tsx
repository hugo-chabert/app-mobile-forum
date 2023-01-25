import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";

interface Props {
    title: string;
    component: any;
    data: any[];
    navigation: any;
    dataToShowCallback: (item: any) => {
        dataToShow: any,
        navigation: any
    };
}

const SideScroller = ({ title, component, data, dataToShowCallback }: Props) => {

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
            <ScrollView style={styles.content} horizontal={true}>
                {data.map((item, index) => {
                    const { dataToShow, navigation } = dataToShowCallback(item)
                    console.log(dataToShow)
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.content, { alignItems: 'flex-start' }]}
                        >
                            {component}
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
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
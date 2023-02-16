import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const OnePostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bandHeader}>
                <ImageBackground
                    source={require('../assets/images/poster.png')}
                    style={styles.bg}
                >
                </ImageBackground>
                {/* <View style={{
                    position: 'absolute',
                    width: '100%',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                </View> */}
                <Text style={{ color: '#ffffff', textAlign: 'left', fontSize: 25 }}>One pièce chapitre 1071</Text>
            </View>
                    {/* <Text style={{ color: 'black', textAlign: 'left', fontSize: 25 }}>One pièce chapitre 1071</Text> */}
        </View>
    );
}
export default OnePostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'black'
    },

    bandHeader: {
        width: "100%",
        height: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4
    },
})
import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    TextInput,
    Image,
    Platform,
    Keyboard
} from 'react-native';

import { fakeUsers } from '../constants/fakedata';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



const TeamsScreen = ({ navigation }) => {

    // const [data, setData] = useState(data);

    // React.useEffect(() => {
    //     fetch('../constants/fakedata.js')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='rgba(219, 217, 219, 1)' barStyle="dark-content" />
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title_header}>Le Staff</Text>
                    <Text style={styles.text_header}>Répertoire de l'équipe</Text>
                </View>



                {/* Section  Administrateurs*/}
                <View style={styles.parallax}>
                    <Image
                        source={require('../assets/images/background.png')}
                        style={[styles.bg, { width: '100%', height: '100%', position: 'absolute' }]}
                    />
                    <Text style={styles.title}>Administrateurs</Text>
                </View>
                <View style={styles.box}>
                    <ScrollView horizontal={true} contentContainerStyle={[styles.carrousel]}>
                        <View style={styles.long_cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                            <Text style={styles.text_cards}>Membre depuis 2018</Text>
                        </View>
                        <View style={styles.long_cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                            <Text style={styles.text_cards}>Membre depuis 2018</Text>
                        </View>
                        <View style={styles.long_cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                            <Text style={styles.text_cards}>Membre depuis 2018</Text>
                        </View>
                    </ScrollView>
                </View>


                {/* Section  Modérateurs*/}
                <View style={styles.parallax}>
                    <Image
                        source={require('../assets/images/background.png')}
                        style={[styles.bg, { width: '100%', height: '100%', position: 'absolute' }]}
                    />
                    <Text style={styles.title}>Modérateurs</Text>
                </View>
                <View style={styles.box}>
                    <ScrollView horizontal={true} contentContainerStyle={[styles.carrousel]}>
                        <View style={styles.cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                        </View>
                        <View style={styles.cards}>
                            <Image
                                source={require('../assets/images/lobo.png')}
                                style={styles.profil_pic}
                            />
                            <Text style={styles.text_cards}>Joker</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

export default TeamsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(219, 217, 219, 1)'
    },
    header: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        paddingHorizontal: 20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft: 30,

    },
    action_select: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft: 30,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
        backgroundColor: '#E6E6E6',
    },
    select: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    parallax: {
        flex: 1,
        marginTop: 40,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    title: {
        marginLeft: 20,
        color: '#FFF',
        fontSize: 25,
        justifyContent: 'center',
        textShadow: '0px 6px 8px rgba(255, 255, 255, 0.25)'
    },
    title_header: {
        fontSize: 60,
        justifyContent: 'center',
        textShadow: '0px 6px 8px rgba(255, 255, 255, 0.25)'
    },
    text_header: {
        fontSize: 40,
        justifyContent: 'center',
        textShadow: '0px 6px 8px rgba(255, 255, 255, 0.25)'
    },
    text_footer: {
        color: '#000',
        fontSize: 25,
        marginLeft: 30,
    },
    signIn: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4
    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 150,
    },
    long_cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBF0F3',
        alignSelf: 'center',
        height: 100,
        width: 375,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#A51717',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBF0F3',
        alignSelf: 'center',
        height: 100,
        width: 200,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#A51717',
    },
    carrousel: {
        display: 'flex',
        flexDirection: 'row'
    },
    profil_pic: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15,
    },
    text_cards: {
        fontSize: 25,
        marginRight: 15
    }
});
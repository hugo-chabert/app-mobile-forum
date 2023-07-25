import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import backgroundStyle from '../constants/BackgroundStyle';

import LoginPage from './LoginScreen';

const LandingPage = ({ navigation }: any) => {

    const [landingPageActive, setLandingPageActive] = useState(true)
    const [loginPageActive, setLoginPageActive] = useState(false)
    const [registerPageActive, setRegisterPageActive] = useState(false)


    if (landingPageActive) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/background.png')}
                    style={backgroundStyle.bg}
                ></ImageBackground>

                <View style={styles.landingPage}>
                    <Image
                        source={require('../assets/images/AkibaTownLogo.png')}
                        style={styles.bigLogo}
                    />
                    <Text style={styles.headline}>
                        Le quartier japonais directement sur ton téléphone !
                    </Text>


                    <View style={{
                        width: "80%",
                        margin: 'auto',
                        alignItems: 'center',
                        paddingVertical: 10
                    }}>
                        <Text style={styles.normalText}>
                            Accède directement à tous les forums juste ici !
                        </Text>
                        <Pressable // ACCUEIL
                            onPress={() => { }}
                            style={styles.standardButtons}
                        ><Text style={styles.buttonText}>Accueil</Text></Pressable>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: "100%",
                        paddingVertical: 10
                    }}>
                        <View style={styles.buttonsAndLabels}>
                            <Text style={styles.normalText}>
                                Déjà membre ? Connecte-toi dès maintenant !
                            </Text>
                            <Pressable // CONNEXION
                                onPress={() => { setLandingPageActive(false); setLoginPageActive(true) }}
                                style={styles.standardButtons}
                            ><Text style={styles.buttonText}>Connexion</Text></Pressable>
                        </View>

                        <View style={styles.buttonsAndLabels}>
                            <Text style={styles.normalText}>
                                Tu n'as pas encore de compte ? Qu'est-ce que tu attends pour nous rejoindre ?!
                            </Text>
                            <Pressable // INSCRIPTION
                                onPress={() => { setLandingPageActive(false); setRegisterPageActive(true) }}
                                style={styles.standardButtons}
                            ><Text style={styles.buttonText}>Inscription</Text></Pressable>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    else if (loginPageActive) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/images/background.png')}
                    style={backgroundStyle.bg}
                ></ImageBackground>

                <View style={styles.landingPage}>
                    <Image
                        source={require('../assets/images/AkibaTownLogo.png')}
                        style={styles.bigLogo}
                    />
                    <Text style={styles.headline}>
                        Connecte-toi pour partager ton avis avec d'autres passionnés !
                    </Text>
                </View>
            </View>
        )
    }
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    bigLogo: {
        width: 150,
        height: 150,
        margin: 5,
    },
    landingPage: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
    },
    headline: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 28,
    },
    buttonsAndLabels: {
        alignItems: 'center',
        width: "45%"
    },
    standardButtons: {
        backgroundColor: '#fff',
        padding: 5,
        width: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#A51717',
    },
    normalText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 14,
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 14,
    },
});
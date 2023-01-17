import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

import backgroundStyle from '../constants/BackgroundStyle';

const LandingPage = ({ navigation }) => {
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
                }}>
                    <Text style={styles.normalText}>
                        Accède directement à tous les forums juste ici !
                    </Text>
                    <Pressable
                        onPress={() => { }}
                        style={styles.standardButtons}
                    ><Text style={styles.buttonText}>Accueil</Text></Pressable>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={styles.buttonsAndLabels}>
                        <Text style={styles.normalText}>
                            Déjà membre ? Connecte-toi dès maintenant !
                        </Text>
                        <Pressable
                            onPress={() => { }}
                            style={styles.standardButtons}
                        ><Text style={styles.buttonText}>Connexion</Text></Pressable>
                    </View>

                    <View style={styles.buttonsAndLabels}>
                        <Text style={styles.normalText}>
                            Tu n'as pas encore de compte ? Qu'est-ce que tu attends pour nous rejoindre ?!
                        </Text>
                        <Pressable
                            onPress={() => { }}
                            style={styles.standardButtons}
                        ><Text style={styles.buttonText}>Inscription</Text></Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
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
        // shadow
        shadowColor: '#ffffff',
        shadowRadius: 10,
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
        width: "30%"
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
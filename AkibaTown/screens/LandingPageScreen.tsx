import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

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


                <View style={styles.buttonsAndLabels}>
                    <Text style={styles.normalText}>
                        Accède directement à tous les forums juste ici !
                    </Text>
                    <Button 
                        title='Accueil' 
                        onPress={() => {}}
                        style={styles.standardButtons}
                    />
                </View>

                <View>
                    <View style={styles.buttonsAndLabels}>
                        <Text style={styles.normalText}>
                            Déjà membre ? Connecte-toi dès maintenant !
                        </Text>
                        <Button 
                            title='Connexion' 
                            onPress={() => {}}
                            co
                            style={styles.standardButtons}
                        />
                    </View>

                    <View style={styles.buttonsAndLabels}>
                        <Text style={styles.normalText}>
                            Tu n'as pas encore de compte ? Qu'est-ce que tu attends pour nous rejoindre ?!
                        </Text>
                        <Button 
                            title='Inscription' 
                            onPress={() => {}}
                            style={styles.standardButtons}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
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

    },
    standardButtons: {

    },
    normalText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
    }
});
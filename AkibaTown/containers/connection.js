import React from 'react';
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
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import SignUpScrenn from './SignUpScreen';

const ConnectionScreen = (navigation) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>


            {/* Parti supérieur : LOGO + Texte  */}
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('../assets/images/AkibaTownLogo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <Animatable.Text
                    animation="bounceIn"
                    style={styles.text_header}
                > Connecte toi pour partager ton avis avec d’autres passionnés ! </Animatable.Text>
            </View>


            {/* Parti Inférieur : Formulaire de connexion  */}
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={'#A51717'}
                        size={20}
                    />
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        style = {[styles.textInput, {
                            fontSize : 20
                        }]}
                        autoCapitalize = 'none'
                        onChangeText={(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name='check-circle'
                            color={'green'}
                            size={20}
                        />
                    </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer, {
                    marginTop : 35
                }]}>Mot de passe</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color={'#A51717'}
                        size={20}
                    />
                    <TextInput
                        placeholder='Mot de passe'
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        secureTextEntry = {data.secureTextEntry ? true : false}
                        style = {[styles.textInput, {
                            fontSize : 20
                        }]}
                        autoCapitalize = 'none'
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={ updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name='eye-off'
                            color={'grey'}
                            size={20}
                        />
                        :
                        <Feather
                            name='eye'
                            color={'grey'}
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text 
                        style={[styles.text_footer,{
                        marginTop : 15,
                        textDecorationLine: 'underline',
                        textDecorationStyle: 'solid',
                        color: '#A51717'
                        }]}
                        >Mot de passe oublié</Text>
                    </TouchableOpacity>
                </View>

            
            
            {/* Bouton de connxion et inscription */}
                <View style={styles.button}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                    style={[styles.signIn, {
                        borderColor: '#A51717',
                        borderWidth: 1,
                        backgroundColor: '#A51717'
                    }]}
                    >
                        <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Se connecter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#A51717',
                        borderWidth: 1,
                        marginTop: 25
                    }]}
                    >
                        <Text style={[styles.textSign, {
                        color: '#A51717'
                    }]}>M'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default ConnectionScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A51717'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        alignSelf: 'center'
    },

    text_header: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 22
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
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
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


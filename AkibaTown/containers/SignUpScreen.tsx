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
    ScrollView,
    Keyboard
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import ConnectionScreen from './connection';

/*Fonction permettant de retirer le clavier*/
function handleTouch() {
    Keyboard.dismiss();
}

const SignUpScrenn = (navigation) => {

    const [data, setData] = React.useState({
        firstname: '',
        lastname: '',
        username: '',
        manga: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                username: val,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                username: val,
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
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/images/background.png')}
                style={[styles.bg, { width: '100%', height: '100%', position: 'absolute' }]}
            />

            {/* Parti supérieur : LOGO + Texte  */}
            <View style={styles.header}
                onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/>
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
                > Inscris toi pour échanger sur tes mangas préférés !! </Animatable.Text>
            </View>


            {/* Parti Inférieur : Formulaire de connexion  */}
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView>

                    {/* Input Nom */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Nom</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Nom'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                        />
                    </View>


                    {/* Input PreNom */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Prénom</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Prénom'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                        />
                    </View>


                    {/* Input Username */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Username'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                            onChangeText={(val) => textInputChange(val)}
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
                            : null}
                    </View>


                    {/* Input manga préféré */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Manga préféré</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="book"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Manga préféré'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                        />
                    </View>


                    {/* Input email */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Email'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                            onChangeText={(val) => textInputChange(val)}
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
                            : null}
                    </View>


                    {/* Input mot de passe */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Mot de passe</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Mot de passe'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
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


                    {/* Input confirmation mot de passe */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Confirmation du mot de passe</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color={'#A51717'}
                            size={20}
                        />
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            placeholder='Confirmation du mot de passe'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                fontSize: 20
                            }]}
                            autoCapitalize='none'
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
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
                            }]}>Créer mon compte</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConnectionScreen')}
                            style={[styles.signIn, {
                                borderColor: '#A51717',
                                borderWidth: 1,
                                marginTop: 25
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#A51717'
                            }]}>J'ai déjà un compte !</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
}

export default SignUpScrenn;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
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
    },
    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4
    }
});

function createAppContainer(AppNavigator: any) {
    throw new Error('Function not implemented.');
}


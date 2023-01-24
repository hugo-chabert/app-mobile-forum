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
    Keyboard
} from 'react-native';

import { ScrollView } from 'react-native';
import Tabs from '../navigation/index'
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'


/*Fonction permettant de retirer le clavier*/
function handleTouch() {
    Keyboard.dismiss();
}


const NewPostscreen = ({ navigation }) => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Combat', disabled: true },
        { key: '2', value: 'Naruto' },
        { key: '3', value: 'One piece' },
        { key: '4', value: 'Baki' },
        { key: '5', value: 'DBZ' },
        { key: '6', value: 'Sport', disabled: true },
        { key: '7', value: 'Kuroko Basket' },
        { key: '8', value: 'Blue Lock' },
        { key: '9', value: 'SlamDunk ' },
        { key: '10', value: 'Inazuma eleven ' },
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor='rgba(219, 217, 219, 1)' barStyle="dark-content" />
                <View style={styles.parallax}>
                    <Image
                        source={require('../assets/images/background.png')}
                        style={[styles.bg, { width: '100%', height: '100%', position: 'absolute' }]}
                    />
                    <Text style={styles.title}>Nouveau Sujet</Text>
                </View>


                {/* Formulaire de creation de sujet */}
                <View style={styles.form}>


                    {/* Input Titre du sujet */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Titre du Sujet
                    </Text>
                    
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Titre du Sujet'
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                            style={[styles.textInput, {
                                fontSize: 25,
                                height: 50,
                                marginRight: 35
                            }]}
                        />
                    </View>


                    {/* Input Manga */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Choix du manga
                    </Text>
                    <View style={styles.action_select}>
                        <SelectList
                            boxStyles={{
                                width: 360,
                                backgroundColor: '#e6e6e6'
                            }}
                            inputStyles={{
                                fontSize: 25,
                            }}
                            dropdownTextStyles={{
                                fontSize: 20,
                            }}
                            maxHeight={500}
                            placeholder='Choisir le manga'
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                        />
                    </View>


                    {/* Text Area */}
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Description du sujet
                    </Text>
                    <View style={styles.action_select}>
                        <TextInput
                            onPress={handleTouch} /*Pour pouvoir retirer le clavier en touchant l'écran*/
                            multiline={true}
                            placeholder='Description du sujet'
                            placeholderTextColor = "rgba(0, 0, 0, 0.5)"
                            style={{
                                height: 400,
                                width: '90%',
                                borderColor: 'gray',
                                borderWidth: 1,
                                fontSize: 22,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 10,
                                backgroundColor: '#e6e6e6',
                            }}
                        />
                    </View>


                    {/* Bouton Publier */}
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('')}
                            style={[styles.signIn, {
                                borderColor: '#A51717',
                                borderWidth: 1,
                                backgroundColor: '#A51717',
                                marginBottom: 100
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Publier</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default NewPostscreen;


const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(219, 217, 219, 1)'
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
        marginTop: 60,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    form: {
        flex: 12,
        width: '100%',
        backgroundColor: '#ffff',
    },
    title: {
        marginLeft: 20,
        color: '#FFF',
        fontSize: 25,
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
    }
});

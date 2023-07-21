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
import { Tabs } from '../navigation';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'

const TeamsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor='rgba(219, 217, 219, 1)' barStyle="dark-content" />
                <View style={styles.header}>
                    <Text></Text>
                </View>
                
                <View style={styles.parallax}>
                    <Image
                        source={require('../assets/images/background.png')}
                        style={[styles.bg, { width: '100%', height: '100%', position: 'absolute' }]}
                    />
                    <Text style={styles.title}>Teams</Text>
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
        flex: 2,
        justifyContent: 'flex-end',
        height: 150,
        paddingHorizontal: 20,
        paddingBottom: 50
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
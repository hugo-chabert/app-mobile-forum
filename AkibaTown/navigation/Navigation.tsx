import React from 'react';
import { View, Text, Image } from 'react-native';
import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';
import { RootStack, AuthStack, AppStack } from '../navigation';
import { PostProvider } from '../context/PostContext';
import { CommentProvider } from '../context/CommentContext';
import { UserProvider } from '../context/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { CustomTabBarButton } from '../navigation';
import { styles } from './index';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ForumScreen from '../screens/ForumScreen';
import NewsScreen from '../screens/NewsScreen';

import { getData } from '../utils/storage';
import NewPostscreen from '../screens/Newpost';
import TeamsScreen from '../screens/TeamsScreen';

function AuthNavigation() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="SignUp"
                component={SignUpScreen}
            />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
            />
        </AuthStack.Navigator>
    )
}

function AppNavigation() {
    return (
        <AppStack.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <AppStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name='Forum'
                component={ForumScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/icons/forum.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name='NewPost'
                component={NewPostscreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/icons/add.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name='News'
                component={NewsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/icons/news.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    )
                }}
            />
            <AppStack.Screen
                name='Teams'
                component={TeamsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/icons/team.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                    )
                }}
            />
        </AppStack.Navigator>
    )
}

export const getIsSignedIn = async () => {
    return false;
};


export const Navigator = () => {
    return (
        <UserProvider>
            <PostProvider>
                <CommentProvider>
                    <NavigationContainer>
                        <RootStack.Navigator>
                            <RootStack.Screen name='AuthNav' component={AuthNavigation} />
                            <RootStack.Screen name='AppNav' component={AppNavigation} />
                        </RootStack.Navigator>
                    </NavigationContainer>
                </CommentProvider>
            </PostProvider>
        </UserProvider>
    )
}
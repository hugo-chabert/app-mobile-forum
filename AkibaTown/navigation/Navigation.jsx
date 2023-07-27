import React from 'react';
import { View, Text, Image } from 'react-native';
import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';
import { RootStack, AuthStack, AppStack, Stack } from './index';
import { PostProvider } from '../context/PostContext';
import { CommentProvider } from '../context/CommentContext';
import { UserProvider } from '../context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import { CustomTabBarButton } from '.';
import { styles } from './index';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ForumScreen from '../screens/ForumScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { getData } from '../utils/storage';
import NewPostscreen from '../screens/NewPostScreen';
import TeamsScreen from '../screens/TeamsScreen';
import { AnimeSearchBar } from '../components/AnimeSearchBar';
import { AnimeProvider } from '../context/AnimeContext';
import { useUserContext } from '../context/userContext';
import { getUserDataFromToken } from '../utils/jwt';
import { deleteData } from '../utils/storage';
import userApi from '../services/userApi';
import CheckUser from '../components/CheckUser';

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
            <AppStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarItemStyle: { display: 'none' },
                }}
            />
        </AppStack.Navigator>
    )
}

export const getIsSignedIn = async () => {
    const token = await getData('token');
    return token !== undefined ? true : false;
};


export const Navigator =  () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

   React.useEffect(() => {
        const checkToken = async () => {
            const signedIn = await getIsSignedIn();
            setIsSignedIn(signedIn);
        };
        checkToken();
    }, []);

    return (
        <UserProvider>
            {/* <AnimeProvider> */}
            <PostProvider>
                <CommentProvider>
                    <NavigationContainer>
                        {/* Mettre le 'headerShown' ici permet aux enfants de cacher leur header */}
                        <RootStack.Navigator screenOptions={{ headerShown: false }}>
                            {/* {isSignedIn ? ( */}
                                <RootStack.Screen name='AuthNav' component={AuthNavigation} />
                                {/* ) : ( */}
                                <RootStack.Screen name='AppNav' component={AppNavigation} />
                            {/* )} */}
                        </RootStack.Navigator>
                    </NavigationContainer>
                </CommentProvider>
            </PostProvider>
            {/* </AnimeProvider> */}
        </UserProvider>
    )
}
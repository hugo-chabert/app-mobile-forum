import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation, Stack, Tab } from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { CommentProvider } from './context/CommentContext';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './containers/SignUpScreen';
import ConnectionScreen from './containers/ConnexionScreen';
import NewPostscreen from './containers/Newpost';

import HomeScreen from './screens/HomeScreen';
import ForumScreen from './screens/ForumScreen';
import NewsScreen from './screens/NewsScreen';

/**
 * Navigation des écrans de l'app (Home, Forum, Profil, etc)
 * @returns Navigateur Tabs
 */
export const AppNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                options={{ headerShown: false }}
                name='Home' 
                component={HomeScreen} 
            />
            <Tab.Screen 
                options={{ headerShown: false }}
                name='Forum' 
                component={ForumScreen} 
            />
            <Tab.Screen 
                options={{ headerShown: false }}
                name='News' 
                component={NewsScreen} 
            />
        </Tab.Navigator>
    )
}


/**
 * Navigation des écrans d'authentification (login et register)
 * @returns Navigateur Stack
 */
export const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="SignUp"
                component={SignUpScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Connexion"
                component={ConnectionScreen}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <UserProvider>
                <PostProvider>
                    <CommentProvider>
                        <NavigationContainer>
                            {/* Navigation du formulaire d'inscription/connexion */}
                            <Stack.Screen name='AuthNav' component={AuthNavigation}/>

                            {/* Navigation du reste de l'application */}
                            <Stack.Screen name='AppNav' component={AppNavigation} />
                        </NavigationContainer>
                    </CommentProvider>
                </PostProvider>
            </UserProvider>
        );
    }
}
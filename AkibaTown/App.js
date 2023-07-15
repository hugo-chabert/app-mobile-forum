import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { RootStack, AuthStack, AppStack } from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { CommentProvider } from './context/CommentContext';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from './containers/SignUpScreen';
import ConnectionScreen from './containers/ConnexionScreen';
import HomeScreen from './screens/HomeScreen';
import ForumScreen from './screens/ForumScreen';
import NewsScreen from './screens/NewsScreen';

import { getData } from './utils/storage';

function AuthNavigation(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="SignUp"
                component={SignUpScreen}
            />
            <AuthStack.Screen
                options={{ headerShown: false }}
                name="Connection"
                component={ConnectionScreen}
            />
        </AuthStack.Navigator>
    )
}

function AppNavigation(){
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                options={{ headerShown: false }}
                name='Home'
                component={HomeScreen}
            />
            <AppStack.Screen
                options={{ headerShown: false }}
                name='Forum'
                component={ForumScreen}
            />
            <AppStack.Screen
                options={{ headerShown: false }}
                name='News'
                component={NewsScreen}
            />
        </AppStack.Navigator>
    )
}



const getIsSignedIn = async () => {
    
    return false;
};

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const isSignedIn = getIsSignedIn();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <UserProvider>
                <PostProvider>
                    <CommentProvider>
                        <NavigationContainer>
                            <RootStack.Navigator>
                                <RootStack.Screen name='AuthNav' component={AuthNavigation}/>
                                <RootStack.Screen name='AppNav' component={AppNavigation}/>
                            </RootStack.Navigator>
                        </NavigationContainer>
                    </CommentProvider>
                </PostProvider>
            </UserProvider>
        );
    }
}
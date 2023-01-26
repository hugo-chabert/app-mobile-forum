import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { CommentProvider } from './context/CommentContext';
import { NavigationContainer } from '@react-navigation/native';
import ConnectionScreen from './containers/connection';
import TeamsScreen from './containers/TeamsScreen';
import SignUpScreen from './containers/SignUpScreen';
import NewPostscreen from './containers/Newpost';
import Tabs from './navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                    headerShown: false
                }} >

                    {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    {/* <Stack.Screen name="SignIn" component={ConnectionScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
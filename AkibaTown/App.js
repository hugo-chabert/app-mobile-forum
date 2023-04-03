import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { CommentProvider } from './context/CommentContext';
import { NavigationContainer } from '@react-navigation/native';
import ConnectionScreen from './containers/connection';
import SignUpScreen from './containers/SignUpScreen';
import NewPostscreen from './containers/Newpost';

const Stack = createNativeStackNavigator();


export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="SignIn" component={ConnectionScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
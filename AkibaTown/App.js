import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation, Stack, Tabs } from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { CommentProvider } from './context/CommentContext';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './containers/SignUpScreen';
import NewPostscreen from './containers/Newpost';
import { AuthNavigation } from './navigation/AuthNav';
import { AppNavigation } from './navigation/AppNav';


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
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />

                            {/* Navigation du formulaire d'inscription/connexion */}
                            <AuthNavigation />

                            {/* Navigation du reste de l'application */}
                            <Stack.Screen name='AppNav' component={AppNavigation} />
                        </NavigationContainer>
                    </CommentProvider>
                </PostProvider>
            </UserProvider>
        );
    }
}
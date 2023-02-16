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
import SignUpScreen from './containers/SignUpScreen';
import NewPostscreen from './containers/Newpost';
import OnePost from './containers/OnePost';


export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <NavigationContainer>
                {/* <UserProvider>
                    <PostProvider>
                        <CommentProvider>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </CommentProvider>
                    </PostProvider>
                </UserProvider> */}
                <OnePost/>
                 {/* <SignUpScreen /> */}
            </NavigationContainer>
        );
    }
}
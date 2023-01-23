import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <UserProvider>
                    <PostProvider>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </PostProvider>
                </UserProvider>
            </SafeAreaProvider>
        );
    }
}
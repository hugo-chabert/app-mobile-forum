import * as React from 'react';
import { Tab } from '.';
import HomeScreen from '../screens/HomeScreen';
import ForumScreen from '../screens/ForumScreen';
import NewsScreen from '../screens/NewsScreen';

/**
 * Navigation des écrans de l'app (Home, Forum, Profil, etc)
 * @returns Navigateur Tabs
 */
export const AppNavigation = () => {
    return (
        <Tab.Navigator>
            {/* 
                Il manque l'onglet "Nouveau post" et "Teams"
            */}
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
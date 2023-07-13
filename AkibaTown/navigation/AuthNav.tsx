import * as React from 'react';
import { Stack } from '.';
import { UserProvider } from '../context/UserContext';
import SignUpScreen from '../containers/SignUpScreen';
import ConnectionScreen from '../containers/ConnexionScreen';

/**
 * Navigation des écrans d'authentification (login et register)
 * @returns Navigateur Stack
 */
export const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <UserProvider>
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
            </UserProvider>
        </Stack.Navigator>
    )
}
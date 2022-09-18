import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Game } from '../pages/Game';
import { Background } from '../components/Background';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

const BG = (child : React.ReactNode) => {
    return () => (
        (
            <Background>
                {child}
            </Background>
        )
    )
}

export function AppRoutes () {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Screen 
                name='home'
                component={BG(<Home/>)}
            />

            <Screen 
                name='game'
                component={BG(<Game/>)}
            />

        </Navigator>
    )
}
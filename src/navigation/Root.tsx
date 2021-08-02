import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Splash
} from '../screens';
import { ROUTES } from '../constants';

const Stack = createNativeStackNavigator();

const Root = () => {
    return(
        <Stack.Navigator
            initialRouteName={ROUTES.SPLASH_ROUTE_NAME}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name={ROUTES.SPLASH_ROUTE_NAME}
                component={Splash}
            />
        </Stack.Navigator>
    );
}

export default Root;
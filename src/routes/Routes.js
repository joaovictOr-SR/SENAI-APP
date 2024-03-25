// João Victor Santos Ruas

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import IMC from '../screens/IMC';
import lampada from '../screens/lampada';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="IMC" component={IMC} />
            <Stack.Screen name="lampada" component={lampada} />
        </Stack.Navigator>
    );
}

export default AppNavigator;

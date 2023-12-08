import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                component={LoginScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name={'Home'}
                component={HomeScreen}
                options={{title:'Home'}}
            />
        </Stack.Navigator>
    );
}

export default MainNavigation;
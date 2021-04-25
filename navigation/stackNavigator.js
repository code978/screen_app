
// navigation/stackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import homeScreen from '../screens/homeScreen';
import aboutScreen from '../screens/aboutScreen';
import contactScreen from '../screens/contactScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name="homeScreen" component={homeScreen} />
            <Stack.Screen name="aboutScreen" component={aboutScreen} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () =>{
    return(
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name="contactScreen" component={contactScreen}/>
        </Stack.Navigator>
    );
};

export { MainStackNavigator,ContactStackNavigator };
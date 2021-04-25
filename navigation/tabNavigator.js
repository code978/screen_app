
// ./navigation/tabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, ContactStackNavigator } from './stackNavigator';
import aboutScreen from '../screens/aboutScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            
            name="homeScreen" component={MainStackNavigator} />
            <Tab.Screen name="aboutScreen" component={aboutScreen} />
            <Tab.Screen name="contactScreen" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
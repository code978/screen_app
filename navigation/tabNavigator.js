
// navigation/tabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator,ContactStackNavigator} from './stackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="" component={}/>
            <Tab.Screen name="" component={}/>
        </Tab.Navigator>
    );
};
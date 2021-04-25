
// ./navigation/tabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator,ContactStackNavigator} from './stackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="homeScreen" component={MainStackNavigator}/>
            <Tab.Screen name="contactScreen" component={ContactStackNavigator}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

// ./navigation/tabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, ContactStackNavigator,AboutScreenNavigator } from './stackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="homeScreen" component={MainStackNavigator} onPress={()=>navigation.drawer()}/>
            <Tab.Screen name="aboutScreen" component={AboutScreenNavigator} onPress={()=>navigation.drawer()}/>
            <Tab.Screen name="contactScreen" component={ContactStackNavigator} onPress={()=>navigation.drawer()}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
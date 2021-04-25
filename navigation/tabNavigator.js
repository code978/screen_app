
// ./navigation/tabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator } from './stackNavigator';
import aboutScreen from '../screens/aboutScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}        
        >
            <Tab.Screen 
    
            name="Home Screen" component={MainStackNavigator} />
            <Tab.Screen name="About Screen" component={aboutScreen} />
            <Tab.Screen name="Contact Screen" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
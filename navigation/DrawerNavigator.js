

// ./navigator/DrawerNavigator.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { ContactStackNavigator } from './stackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="homeScreen" component={TabNavigator}/>
            <Drawer.Screen name="contactScreen" component={ContactStackNavigator}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
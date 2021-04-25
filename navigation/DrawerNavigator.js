// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {ContactStackNavigator} from './stackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

import TabNavigator from "./tabNavigator";
import aboutScreen from "../screens/aboutScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="homeScreen" component={TabNavigator} />
            <Drawer.Screen name="aboutScreen" component={aboutScreen} />
            <Drawer.Screen name="contactScrreen" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
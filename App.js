

// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from './navigation/stackNavigator';

const App = () => {
  return <NavigationContainer>
    <MainStackNavigator/>
  </NavigationContainer>
}


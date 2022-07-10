import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './Welcome';
import VNLStackScreen from './VNL';
import Donny from './Donny';
import Developer from './Developer.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown:false}}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Elevate Yourself" component={Donny} />
        <Tab.Screen name="VNL" component={VNLStackScreen} />
        <Tab.Screen name="About the Developer" component={Developer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


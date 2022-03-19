import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

export function MainStack() {

  return (
    <NavigationContainer style={{backgroundColor: '#fc034e'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

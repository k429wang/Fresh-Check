import React from 'react';
import Home from './containers/home.jsx';
import Cam from './containers/cameraexample'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component = {Home}
          />
        <Stack.Screen 
        name = "Camera"
        component = {Cam}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


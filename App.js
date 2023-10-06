import React, { useState, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/components/HomeScreen";
import SongScreen from "./src/components/SongScreen";
import PlayMusic from "./src/components/PlayMusic";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Songs" component={SongScreen} />
        <Stack.Screen name="Play Music" component={PlayMusic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

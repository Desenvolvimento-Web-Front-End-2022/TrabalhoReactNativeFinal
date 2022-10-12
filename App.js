import 'react-native-gesture-handler';
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './components/pages/home/home';
import { DevelopScreen } from './components/pages/develop/develop';
import { ArchiveScreen } from './components/pages/archive/archive';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Revelação" component={DevelopScreen} />
        <Drawer.Screen name="Arquivamento" component={ArchiveScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



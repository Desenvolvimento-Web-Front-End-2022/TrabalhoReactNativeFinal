import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DevelopSubScreen } from './subpages/develop/developSubScreen';
import { StopBathWashScreen } from './subpages/stopbath-wash/stopBathWashSubScreen';
import { FixerSubScreen } from './subpages/fixer/fixerSubScreen';
import { FinalWashSubScreen } from './subpages/finalwash/finalWashSubScreen';

const Stack = createNativeStackNavigator()

export const DevelopScreen = ({ navigation,route }) =>{
    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Revelação" component={DevelopSubScreen}/>
            <Stack.Screen name="Lavagem/Interruptor" component={StopBathWashScreen}/>
            <Stack.Screen name="Fixação" component={FixerSubScreen}/>
            <Stack.Screen name="Lavagem Final" component={FinalWashSubScreen}/>
        </Stack.Navigator>
        

    );



}
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export const HomeScreen = ({ navigation,route })=>{
    return (
        <View>
            <Text> Esse é o texto Principal</Text>
            <Text>Segundo Texto</Text>
        </View>
    );


}
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export const DevelopSubScreen = ({ navigation,route}) =>{
    return(
        <View>
            <Button title="Avançar p/ Lavagem/Interruptor" onPress={()=> navigation.navigate('Lavagem/Interruptor')}/>
        </View>
    )

}
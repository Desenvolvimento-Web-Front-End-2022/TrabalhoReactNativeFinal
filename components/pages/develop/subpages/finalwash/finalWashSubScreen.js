import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export const FinalWashSubScreen = ({ navigation,route}) =>{
    return(
        <View>
            <Button title="Voltar p/ Fixação" onPress={()=> navigation.navigate('Fixação')}/>
        </View>
    )

}
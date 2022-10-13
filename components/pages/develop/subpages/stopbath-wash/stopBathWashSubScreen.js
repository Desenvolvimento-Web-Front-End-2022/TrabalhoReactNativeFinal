import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export const StopBathWashScreen = ({ navigation,route}) =>{
    return(
        <View>
            <Button title="Voltar para Revelação" onPress={()=>navigation.navigate('Revelação')}/>
            <Button title="Avançar para Fixação" onPress={()=>navigation.navigate('Fixação')}/>
        </View>
    )

}
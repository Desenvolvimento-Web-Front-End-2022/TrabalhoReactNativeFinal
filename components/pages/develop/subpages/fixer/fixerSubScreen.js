import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


export const FixerSubScreen = ({ navigation,route}) =>{
    return(
        <View>
            <Button title="Voltar para Lavagem/Interruptor" onPress={()=>navigation.navigate('Lavagem/Interruptor')}/>
            <Button title="Avançar para Lavagem Final" onPress={()=>navigation.navigate('Lavagem Final')}/>
        </View>
    )

}
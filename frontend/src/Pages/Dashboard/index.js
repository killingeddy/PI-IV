import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
// import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Dashboard() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text  onPress={ () => navigation.navigate('Inicio')}>VOLTAR </Text>
            <Text  style={styles.text} onPress={ () => navigation.navigate('Detalhes')}>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    text:{
        flex:1,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40
    }
    
})
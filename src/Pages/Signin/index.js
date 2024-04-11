import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message} onPress={ () => navigation.navigate('Inicio')}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
              
                <Text style={styles.title}>E-mail</Text>
                    <TextInput 
                        placeholder='Digite seu e-mail:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Text style={styles.title}>Senha</Text>
                    <TextInput 
                        placeholder='Digite sua senha:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Pressable style={styles.buton} onPress={ () => navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>

                <Pressable style={styles.butonRegister} onPress={ () => navigation.navigate('SignUp')}>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </Pressable>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    containerHeader:{
        marginTop: '18%',
        marginBottom: '14%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize:20,
        marginTop:28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buton:{
        backgroundColor: '#39A0B0',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#white',
        fontSize: '18',
        fontWeight: 'bold'
    },
    butonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message} onPress={ () => navigation.navigate('SignIn')}>Tela de cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
              
                <Text style={styles.title}>Nome de Usuário</Text>
                    <TextInput 
                        placeholder='Digite seu nome de Usuário:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

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

                <Text style={styles.title}>Confirmar e-mail</Text>
                    <TextInput 
                        placeholder='Confirme seu e-mail:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Text style={styles.title}>Confirmar senha</Text>
                    <TextInput 
                        placeholder='Confirme sua senha:'
                        placeholderTextColor='#a1a1a1'
                        style={styles.input}
                        />

                <Pressable style={styles.buton} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
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
        marginTop: '10%',
        marginBottom: '4%',
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
        fontSize:17,
        marginTop:24,
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
        color: '#fff',
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
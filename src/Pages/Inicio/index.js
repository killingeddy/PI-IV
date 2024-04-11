import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Inicio() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    style={styles.containerImg}
                    source={require('../../Assets/arduino.jpg')}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={750} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Olá, seja muito bem vindo ao nosso App.</Text>
                <Text style={styles.text}>Monitore seu projeto IOT.</Text>
                <Pressable 
                        style={styles.button}
                        onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}> Entrar </Text>
                </Pressable>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        backgroundColor:'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImg:{
        backgroundColor:'#DADADA',
        borderRadius:'50%',
        shadowColor: '#333',
        shadowOffset: {
            width: 3.2,
            height: 4.4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 2.2, 
        borderColor: '#333', 
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#39A0B0',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#333',
        shadowOffset: {
            width: 2.2,
            height: 3.5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2.6,
        elevation: 5,
    },
    buttonText:{
        fontSize: 18,
        color:'#fff',
        fontWeight:'bold'
    }
})
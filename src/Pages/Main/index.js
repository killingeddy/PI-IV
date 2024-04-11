import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Main() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    style={styles.containerImg}
                    source={require('../../Assets/arduino.jpg')}
                    resizeMode='contain'
                    onPress={ () => navigation.navigate('Inicio')}
                />
            </View>
            <Animatable.View delay={750} animation="fadeInUp" style={styles.containerForm}>
                <Animatable.View delay={750} animation="fadeInUp" style={styles.containerButtonUp}>
                    <Pressable 
                            style={styles.buttonUp}
                            onPress={ () => navigation.navigate('Dashboard')}
                    >
                        <Text style={styles.buttonText}> Dashboard </Text>
                    </Pressable>
                </Animatable.View>
                <Animatable.View delay={750} animation="fadeInUp" style={styles.containerButton}>
                    <Pressable 
                            style={styles.button}
                            onPress={ () => navigation.navigate('Detalhes')}
                    >
                        <Text style={styles.buttonText}> Detalhes do projeto </Text>
                    </Pressable>
                </Animatable.View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        backgroundColor:'#39A0B0',
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    containerLogo:{
        flex:1,
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
    containerButtonUp:{
        flex:0.6,
        marginTop:'15%'
    },
    containerButton:{
        flex:1
    },
    button:{
        position: 'absolute',
        backgroundColor: '#DADADA',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
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
    buttonUp:{
        position: 'absolute',
        backgroundColor: '#DADADA',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'start',
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
        color:'#333',
        fontWeight:'bold'
    }
})
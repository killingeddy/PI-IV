import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';



export default function Detalhes() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>

                <Animatable.Image
                    animation="flipInY"
                    style={styles.containerImg}
                    source={require('../../Assets/gasFirst.png')}
                    resizeMode='contain'
                    onPress={ () => navigation.navigate('Inicio')}
                />
                
            </View>

            <View style={styles.peca}>

                <Text style={styles.title}>Componentes</Text>      
                <View style={styles.componentsFirst}>

                    <View style={styles.First}>
                        <Text>component 1</Text>
                        <Text>component 2</Text>
                        <Text>component 3</Text>
                        <Text>component 4</Text>
                    </View>

                </View>

                <View style={styles.componentsSecond}>

                    <View style={styles.Second}>
                        <Text>component 1</Text>
                        <Text>component 2</Text>
                        <Text>component 3</Text>
                        <Text>component 4</Text>
                    </View>

                </View>

            </View>

            <View style={styles.proj}>

                <Text style={styles.explicacao}>Projeto em ação</Text>
                <View style={styles.textoExplicacao}>
                        
                        <Text>       Nosso projeto consiste em montar um sistema  central de alarmes contra incêndios, 
                             tendo como  objetivo principal ser um sistema completo, possuindo  sensores de gás e
                             de chamas e também presa pela  acessibilidade  com alarmes e luzes incluindo pessoas
                              com algumas possíveis deficiências.</Text>

                    </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    containerLogo:{
        flex:0.94,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'6%'
    },
    containerImg:{
        flex:1, 
    },
    peca:{
        flex: 0.6,
    },
    proj:{
        flex: 0.6,
        backgroundColor: '#DEDEDE',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title:{
        textAlign:'center',
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    explicacao:{
        textAlign:'center',
        fontSize: 22,
        fontWeight:'bold',
        marginTop: '5%',
        marginBottom: 40,
    },
    textoExplicacao:{
        fontWeight:'bold',
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'center',
        textAlign:'center',
        fontSize: 20,
        flex:0.45,
        justifyContent: 'center',
        paddingVertical: '3%',
        marginLeft: '5%',
        marginRight: '5%',
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
    comp:{
        display: 'flex',
    },
    componentsFirst:{
        fontSize: 20,
        display: 'flex',
        flexDirection: 'colum',
        flex:0.4,
        justifyContent: 'center',
        paddingVertical: '1%',
        marginTop: '11.5%',
    },
    First:{
        alignItems: 'center',
        display:'flex',
        marginRight: '50%',
        fontSize: 20,
        fontWeight:'900'
    },
    componentsSecond:{
        display: 'flex',
        flexDirection: 'colum',
        flex:0.4,
        justifyContent: 'center',
        paddingVertical: '1%',
        marginBottom:'30%',
    },
    Second:{
        marginBottom: '5%',
        marginLeft:'50%',
        alignItems: 'center',
        display:'flex',
        fontSize: 20,
        fontWeight:'900',
    }
    
})
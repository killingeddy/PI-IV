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
                
                <View style={styles.compOne}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Text>component 1</Text>
                    <Text>component 2</Text>
                    <Text>component 3</Text>
                    <Text>component 4</Text>

                </View>

                <View style={styles.compTwo}>

                    <Text>component 1</Text>
                    <Text>component 2</Text>
                    <Text>component 3</Text>
                    <Text>component 4</Text>
                    
                </View>

            </View>

            <Text style={styles.explicacao}>Projeto em ação</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#39A0B0'
    },
    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'3%'
    },
    containerImg:{
        flex:1, 
    },
    peca:{
        flex: 0.44,
    },
    title:{
        flex: 0.56,
        textAlign:'center',
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 30,
        marginBottom: 20,
    },
    explicacao:{
        flex: 0.56,
        textAlign:'center',
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
    comp:{
        display: 'flex',
    },
    compOne:{
        fontSize: 16,
        display: 'flex',
        flexDirection: 'colum',
        flex:0.4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: '1%'
    },
    compTwo:{
        fontSize: 16,
        display: 'flex',
        flexDirection: 'colum',
        flex:0.4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: '1%'
    }
    
})
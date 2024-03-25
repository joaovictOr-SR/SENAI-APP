// João Victor Santos Ruas

import React from "react";
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function Feed({ navigation }) {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png' }} 
                style={styles.image} />

            <Text style={styles.text}>Navegação</Text>
            <Pressable 
                style={styles.botao} 
                onPress={() => navigation.navigate('IMC')}>
                <Text style={styles.textoBotao}>Ir para Tela do IMC</Text>
            </Pressable>
            <Pressable 
                style={styles.botao} 
                onPress={() => navigation.navigate('lampada')}>
                <Text style={styles.textoBotao}>Ir para lâmpada</Text>
            </Pressable>
            <Pressable 
                style={styles.botao} 
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoBotao}>Deslogar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    text: {
        color: '#000', 
        fontSize: 20, 
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 200, 
        height: 50, 
    },

    botao:{
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    textoBotao: {
        color: "white",
        fontSize: 18,
    }, 
});

// João Victor Santos Ruas

import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput, Pressable, Text, Alert} from 'react-native';

const LoginScreen = ({navigation}) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setUsername('');
    setPassword('');

    if (username === 'user' && password === '12345') {
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos', [{text: 'Tentar novamente'}]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
             source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png' }} 
              style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.botao} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    padding: 10,
    width: 200,
    height: 40,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    width: 200, 
    height: 50,
    margin: 40, 
},

});

export default LoginScreen;
// João Victor Santos Ruas

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const App = ({ navigation }) => { // Ajuste feito aqui
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100; // Convertendo para metros
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2)); // Fixa duas casas decimais
  };

  return (
    <View style={styles.container}>
        
        <Pressable onPress={() => navigation.goBack()}> {/* Agora isso deve funcionar como esperado */}
             <Text style={styles.linkText}>Voltar para Home</Text>
        </Pressable>

        <Text style={styles.textinfo}>Peso (kg):</Text>

      <TextInput
        value={peso}
        onChangeText={setPeso}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        style={styles.input}
      />

        <Text style={styles.textinfo}>Altura (cm): </Text>
      
      <TextInput
        value={altura}
        onChangeText={setAltura}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable 
                style={styles.botao} 
                onPress={calcularIMC}>
                <Text style={styles.textoBotao}>Calcular IMC</Text>
      </Pressable>

      {imc && (
        <Text style={styles.resultado}>
          Seu IMC é: {imc}
        </Text>
      )}
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
  textinfo: {

  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  linkText: {
    fontSize: 16,
    color: '#FF0000',
    textDecorationLine: 'none',
    margin: 10,
  },
  botao: {
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
  }

});

export default App;

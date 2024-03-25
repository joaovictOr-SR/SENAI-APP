// João Victor Santos Ruas

import React, { useState } from 'react';
import { View, Image, Switch, StyleSheet, Text, Pressable } from 'react-native';

const LampScreen = ({ navigation }) => {
  const [isLampOn, setIsLampOn] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: isLampOn ? '#fff' : '#1e1e1f' }]}>
        <Pressable onPress={() => navigation.goBack()}>
         <Text style={styles.linkText}>Voltar para Home</Text>
        </Pressable>

      <Image
        source={{
          uri: isLampOn
            ? 'https://cdn-icons-png.flaticon.com/512/702/702797.png'
            : 'https://cdn-icons-png.flaticon.com/512/702/702814.png',
        }}
        style={styles.lampImage}
      />
      <Text style={styles.statusText}>
         {isLampOn ? 'Apague' : 'Acenda'} a luz
      </Text>
      <Switch
        value={isLampOn}
        onValueChange={() => setIsLampOn(!isLampOn)}
      />    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lampImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#FF0000',
    textDecorationLine: 'none',
  },
});

export default LampScreen;

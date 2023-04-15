import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const multiplicacao = Number(num1) * Number(num2);
    setResultado(multiplicacao.toString());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Multiplicador de Números 
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={num1 => setNum1(num1)}
        value={num1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={num2 => setNum2(num2)}
        value={num2}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calcular}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 25,
    fontSize: 22,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
  },
});

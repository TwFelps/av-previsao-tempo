// source/screens/Home.jsx
import React, { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [cidade, setCidade] = useState('');
  const [clima, setClima] =useState(null);
  const [carregando, setCarregando] =useState(false);
  const [erro, setErro] =useState('');

  const buscarClima = async () => {
    if (!cidade) return;

    setCarregando(true);
    setErro('');
    setClima(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=53a04a900e63f4f0660469117a3749ef&lang=pt_br&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) throw new Error(data.message);  

      setClima(data);
    } catch (err) {
      setErro('Cidade não encontrada.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>
    <Image
      style={{
        width: 100,
        height: 100,
        resizeMode:  'contain',
      }}
      source={
        require('../../assets/logo/logo.png')
      }
      />
      <Text style={styles.title}>Previsão do Tempo</Text>
      
      <TextInput 
        style={styles.input}
        placeholder='Digite o nome da cidade'
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity style={styles.button} onPress={buscarClima}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {carregando && <text style={{ textAlign: 'center', marginTop: 10}}>Carregando...</text>}

      {erro != '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: 10}}>{erro}</Text>}

      {clima && (
        <View style={styles.resultado}>
          <Text style={styles.city}>{clima.name} {clima.main.temp}°C</Text>
          <Text>{clima.weather[0].description}</Text>
          <Text>Mín: {clima.main.temp_min}°C </Text>
          <Text>Máx: {clima.main.temp_max}°C</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }, 
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
    button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
  marginTop: 20,
  alignItems: 'center',
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});


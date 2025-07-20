// source/screens/Home.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function HomeScreen() {

  const [cidade, setCidade] = useState('');
  const [clima, setClima] =useState(null);
  const [carregando, setCarregando] =useState(false);
  const [erro, setErro] =useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

      {carregando && <Text style={{ textAlign: 'center', marginTop: 10 }}>Carregando...</Text>}

      {erro != '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: 10}}>{erro}</Text>}

      

      {clima && (
        <View style={styles.weatherContainer}>
            <Text style={styles.cityText}>{clima.name} {clima.main.temp}°C</Text>
            <Text style={styles.weatherText}>Clima: {clima.weather[0].description}</Text>
            <Text style={styles.weatherText}>Mínima: {clima.main.temp_min}°C</Text>
            <Text style={styles.weatherText}>Máxima: {clima.main.temp_max}°C</Text>
            <View style={styles.buttonsContainer}>
              
              <TouchableOpacity 
                style={styles.detailButton}
                onPress={() => {
                  navigation.navigate('Details', {
                    feelsLike: clima.main.feels_like,
                    humidity: clima.main.humidity,
                    windSpeed: clima.wind.speed
                  });
                }}
                >
                <Text style={styles.detailButtonText}>Mais detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.detailButtonText}>Compartilhar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dbcff',
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
    backgroundColor: 'white',
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
  weatherContainer: {
    backgroundColor: '#c6e0f7',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  weatherImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  cityText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  weatherText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
   buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
   detailButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  shareButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  detailButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

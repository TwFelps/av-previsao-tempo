import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { Image } from 'react-native';
import { getWeatherIcon } from '../utils/getWeatherIcon';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

  const DetailsScreen: React.FC<Props> = ({ route }) => {
    const { name, country, description, temp, tempMax, tempMin, feelsLike, humidity, windSpeed, iconSource } = route.params; 

    return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftSide}>
          <Image source={iconSource} style={styles.weatherImage} />
          <Text style={styles.cityText}>{name}, {country}</Text>
          <Text style={styles.info}>Temperatura: {temp}ºC</Text>
        </View>

      <View style={styles.rightSide}>
        <Text style={styles.info}>Clima: {description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()}</Text>
        <Text style={styles.info}>Mínima: {tempMin}ºC</Text>
        <Text style={styles.info}>Máxima: {tempMax}ºC</Text>
        <Text style={styles.info}>Sensação Térmica: {feelsLike}ºC</Text>
        <Text style={styles.info}>Umidade: {humidity}%</Text>
        <Text style={styles.info}>Velocidade do vento: {windSpeed} m</Text>
        </View>
      </View>
    </View>
);
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: '#6dbcff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#c6e0f7',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '100%',
  },  
  leftSide: {
    alignItems: 'center',
    marginRight: 20,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
  },
  weatherImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
    cityText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  info: { 
    fontSize: 18, 
    marginBottom: 5 
  },
});

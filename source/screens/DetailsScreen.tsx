import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

const screenWidth = Dimensions.get('window').width;

const DetailsScreen: React.FC<{ route: RouteProp<RootStackParamList, 'Details'> }> = ({ route }) => {
  const { name, country, description, temp, tempMax, tempMin, feelsLike, humidity, windSpeed, iconSource } = route.params;

  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const infoRow = (label: string, value: string) => (
    <Text style={styles.info}>
      <Text style={{ fontWeight: 'bold' }}>{label}</Text> {value}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.leftSide}>
            <Image source={iconSource} style={styles.weatherImage} />
            <Text style={styles.cityText}>{name}, {country}</Text>
            <Text style={styles.info}>Temperatura: {temp}ºC</Text>
          </View>

          <View style={styles.rightSide}>
            {infoRow('Clima:', capitalize(description))}
            {infoRow('Mínima:', `${tempMin}ºC`)}
            {infoRow('Máxima:', `${tempMax}ºC`)}
            {infoRow('Sensação Térmica:', `${feelsLike}ºC`)}
            {infoRow('Umidade:', `${humidity}%`)}
            {infoRow('Velocidade do vento:', `${windSpeed} m/s`)}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dbcff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#c6e0f7',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    maxWidth: 500,
  },
  row: {
    flexDirection: screenWidth > 500 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: screenWidth > 500 ? 'center' : 'flex-start',
  },
  leftSide: {
    alignItems: 'center',
    marginBottom: screenWidth > 500 ? 0 : 20,
    width: screenWidth > 500 ? '40%' : '100%',
  },
  rightSide: {
    width: screenWidth > 500 ? '55%' : '100%',
  },
  weatherImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
    color: '#444',
  },
});

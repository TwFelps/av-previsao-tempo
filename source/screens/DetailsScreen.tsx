import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
    const route = useRoute<DetailsRouteProp>();
    const { feelsLike, humidity, windSpeed } = route.params; 

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Detalhes do Clima</Text>
        <Text style={styles.info}>Sensação Térmica: {feelsLike}ºC</Text>
        <Text style={styles.info}>Umidade: {humidity}%</Text>
        <Text style={styles.info}>Velocidade do vento: {windSpeed} m</Text>
    </View>
);
}

const styles = StyleSheet.create({
  container:{ flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 5 },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './source/screens/HomeScreen';
import DetailsScreen from './source/screens/DetailsScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
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
});

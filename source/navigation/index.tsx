import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    name: string,
    country: string,
    description: string,
    temp: number,
    tempMax: number,
    tempMin: number,
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    ehDia: boolean;
    iconSource: ImageSourcePropType;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes do Clima' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
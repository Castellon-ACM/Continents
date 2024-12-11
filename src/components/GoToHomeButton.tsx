import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

const GoToHomeButton = () => {
  type ContinentsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContinentsScreen'>;

  const navigation = useNavigation<ContinentsScreenNavigationProp>();

  const handlePress = () => {
    // Verifica si hay pantallas en el historial de navegación
    if (navigation.canGoBack()) {
      navigation.goBack(); // Regresa a la pantalla anterior
    } else {
      console.log("No hay pantalla anterior"); // O puedes no hacer nada o mostrar un mensaje
    }
  };

  return (
    <Button
      title="Go to Home"
      onPress={handlePress} // Llamamos a la función para manejar la acción
    />
  );
};

const styles = StyleSheet.create({});

export default GoToHomeButton;

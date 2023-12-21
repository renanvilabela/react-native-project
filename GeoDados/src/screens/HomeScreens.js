import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CsvReader from '../Components/CsvReader'; // Importe o componente CsvReader corretamente
import MapView from 'react-native-maps'; // Importe o MapView corretamente

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leitor de CSV</Text>
      <CsvReader /> 
      <MapView /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

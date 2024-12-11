import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CountryCardProps {
  name: string;
  capital: string;
  languages: string[];
  flag: string;
}

const CountryCard = ({ name, capital, languages, flag }: CountryCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: flag }} style={styles.flag} />
      <View style={styles.infoContainer}>
        <Text style={styles.countryName}>{name}</Text>
        <Text style={styles.capital}>Capital: {capital}</Text>
        <Text style={styles.languages}>Languages: {languages.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  flag: {
    width: 50,
    height: 30,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  capital: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  languages: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default CountryCard;
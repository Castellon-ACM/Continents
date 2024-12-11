import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native'; 
import { RootStackParamList } from '../App';
import { CountryService } from '../api';
import { SvgUri } from 'react-native-svg';


type CountriesScreenRouteProp = RouteProp<RootStackParamList, 'CountriesScreen'>;

const CountriesScreen = ({ route }: { route: CountriesScreenRouteProp }) => {
  const { continent } = route.params || {};
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCountriesByContinent = async () => {
    try {

      // Este es solo un ejemplo:
      const countriesData = await CountryService.fetchCountries();
      const filteredCountries = countriesData.filter(country => country.region === continent);
      setCountries(filteredCountries);
      console.log('Countries:', filteredCountries);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (continent) {
      fetchCountriesByContinent();
    }
  }, [continent]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Countries in {continent}</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.countryItem}>
            <Text>{item.name}</Text>
            <Text>Capital: {item.capital || 'Unknown'}</Text>
            <Text>Languages: {Array.isArray(item.languages) ? item.languages.join(', ') : 'No languages available'}</Text>
            {item.flags ? (
              <SvgUri
                uri={item.flags} // URL del SVG
                width={100}
                height={60}
              />
            ) : (
              <Text>No flag available</Text>
            )}
          </SafeAreaView>
        )}
      />

      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  flagImage: {
    width: 100, 
    height: 60,
    marginTop: 10,
    backgroundColor: '#ccc', 
  },
});


export default CountriesScreen;
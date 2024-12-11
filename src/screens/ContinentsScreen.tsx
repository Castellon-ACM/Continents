import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { Country, CountryService } from '../api';
import ContinentsList from '../components/ContinentsList';
import { RootStackParamList } from '../App';

type ContinentsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContinentsScreen'>;

const ContinentsScreen = () => {
  const [continents, setContinents] = useState<string[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  const navigation = useNavigation<ContinentsScreenNavigationProp>();

  const fetchCountriesData = async () => {
    try {
      const countriesData = await CountryService.fetchCountries();
      setCountries(countriesData);
      
      const continentList = CountryService.getContinents(countriesData);
      setContinents(continentList);
      
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching countries data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const handleContinentSelect = (continent: string) => {
    navigation.navigate('CountriesScreen', { continent });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select a Continent</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ContinentsList continents={continents} onContinentSelect={handleContinentSelect} />
        </>
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
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ContinentsScreen;
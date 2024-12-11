import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ContinentsListProps {
  continents: string[];
  onContinentSelect: (continent: string) => void; 
}

const ContinentsList = ({ continents, onContinentSelect }: ContinentsListProps) => {
  return (
    <FlatList
      data={continents}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onContinentSelect(item)} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});

export default ContinentsList;
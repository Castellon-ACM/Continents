import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../ThemeContext';


const ScreenThree = () => {
  const { theme } = useTheme();
  const styles = theme === 'light' ? { backgroundColor: '#ffffff', color: '#000000' } : { backgroundColor: '#000000', color: '#ffffff' };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.backgroundColor }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: styles.color }}>Screen Three</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScreenThree;


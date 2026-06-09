import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Belum ada tugas</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Tambah Tugas (Dummy)" 
          onPress={() => navigation.navigate('Form')} 
        />
        <Button 
          title="Detail Tugas (Dummy)" 
          onPress={() => navigation.navigate('Detail')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  }
});

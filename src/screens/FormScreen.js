import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function FormScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newTask = {
      title,
      description,
      category: category || 'Pribadi' // default if empty
    };
    navigation.navigate('Home', { newTask });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Judul Tugas</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan judul tugas"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Deskripsi</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Masukkan deskripsi"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      <Text style={styles.label}>Kategori (Kuliah/Pribadi/Organisasi)</Text>
      <TextInput
        style={styles.input}
        placeholder="Misal: Kuliah"
        value={category}
        onChangeText={setCategory}
      />

      <View style={styles.buttonContainer}>
        <Button title="Simpan Tugas" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 40,
  }
});

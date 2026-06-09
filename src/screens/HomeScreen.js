import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Mengerjakan Tugas Mobile App',
      description: 'Membuat aplikasi React Native menggunakan Expo dengan fungsionalitas CRUD dasar.',
      status: 'Belum',
      category: 'Kuliah'
    },
    {
      id: '2',
      title: 'Rapat Organisasi',
      description: 'Membahas program kerja bulan depan bersama panitia inti.',
      status: 'Selesai',
      category: 'Organisasi'
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Belum ada tugas</Text>}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
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
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
    flexGrow: 1,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888'
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 10,
  }
});

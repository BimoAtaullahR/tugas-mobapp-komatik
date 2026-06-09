import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TaskCard from '../components/TaskCard';
import { addTask, toggleTaskStatus, deleteTask, filterTasksByStatus } from '../utils/taskUtils';

export default function HomeScreen({ route, navigation }) {
  const [activeFilter, setActiveFilter] = useState('Semua');
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

  useEffect(() => {
    if (route.params?.newTask) {
      setTasks(currentTasks => addTask(currentTasks, route.params.newTask));
      // Reset params so we don't add it again on re-render
      navigation.setParams({ newTask: undefined });
    }
  }, [route.params?.newTask]);

  useEffect(() => {
    if (route.params?.deletedTaskId) {
      setTasks(currentTasks => deleteTask(currentTasks, route.params.deletedTaskId));
      navigation.setParams({ deletedTaskId: undefined });
    }
  }, [route.params?.deletedTaskId]);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {['Semua', 'Belum', 'Selesai'].map(filter => (
          <TouchableOpacity 
            key={filter}
            style={[styles.filterButton, activeFilter === filter && styles.filterButtonActive]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filterTasksByStatus(tasks, activeFilter)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Belum ada tugas</Text>}
        renderItem={({ item }) => (
          <TaskCard 
            task={item} 
            onPress={() => navigation.navigate('Detail', { task: item })} 
            onToggleStatus={() => setTasks(currentTasks => toggleTaskStatus(currentTasks, item.id))}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Tambah Tugas" 
          onPress={() => navigation.navigate('Form')} 
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
  filterContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 0,
    gap: 8,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
  },
  filterText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
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

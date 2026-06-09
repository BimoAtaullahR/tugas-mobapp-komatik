import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { task } = route.params || {};

  if (!task) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Tugas tidak ditemukan.</Text>
        <Button title="Kembali" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Judul</Text>
        <Text style={styles.value}>{task.title}</Text>

        <Text style={styles.label}>Kategori</Text>
        <Text style={styles.value}>{task.category}</Text>

        <Text style={styles.label}>Status</Text>
        <View style={[styles.statusBadge, task.status === 'Selesai' ? styles.statusSelesai : styles.statusBelum]}>
          <Text style={styles.statusText}>{task.status}</Text>
        </View>

        <Text style={styles.label}>Deskripsi</Text>
        <Text style={styles.value}>{task.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Hapus Tugas" 
          color="#dc3545" 
          onPress={() => navigation.navigate('Home', { deletedTaskId: task.id })} 
        />
        <View style={{height: 10}} />
        <Button title="Kembali" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 12,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  statusBelum: {
    backgroundColor: '#fff3cd',
  },
  statusSelesai: {
    backgroundColor: '#d4edda',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  }
});

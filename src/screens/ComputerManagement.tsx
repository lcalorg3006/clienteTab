import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ComputerForm from '../components/ComputerForm';
import useComputerStore from '../store/computerStore';
import { Computer } from '../type';

const ComputerManagement: React.FC = () => {
  
  const { computers, loading, error, fetchComputers } = useComputerStore();

  useEffect(() => {
    fetchComputers('AULA_1'); 
  }, []);

  if (loading && computers.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error && computers.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ComputerForm />
      <FlatList
        data={computers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.computerItem}>
            <Text>📌Estudiante: {item.studentName}</Text>
            <Text>📚Grado: {item.grade}</Text>
            <Text>🏫Aula: {item.classroomId}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay computadoras registradas</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  computerItem: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});

export default ComputerManagement;

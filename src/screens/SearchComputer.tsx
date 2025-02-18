import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useComputerStore from '../store/computerStore';

const SearchComputer: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const { searchComputer, loading, error } = useComputerStore();
  const [foundComputer, setFoundComputer] = useState<any>(null);
  const handleSearch = async () => {
    if (studentName) {
      const result = await searchComputer({ studentName });
      if (result) {
        setFoundComputer(result); 
        
      } else {
        setFoundComputer(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Computadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del estudiante"
        value={studentName}
        onChangeText={setStudentName}
      />
      <Button
        title={loading ? 'Buscando...' : 'Buscar'}
        onPress={handleSearch}
        disabled={loading || !studentName}
      />
      {error && <Text style={styles.error}>{error}</Text>}

      {foundComputer && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>💻 ID: {foundComputer.id}</Text> 
          <Text style={styles.resultText}>📌 Estudiante: {foundComputer.studentName}</Text>
          <Text style={styles.resultText}>📚 Grado: {foundComputer.grade}</Text>
          <Text style={styles.resultText}>🏫 Aula: {foundComputer.classroomId}</Text>
        </View>
      )}

      {foundComputer === null && studentName && !loading && (
        <Text style={styles.error}>Computadora no encontrada</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 12,
    backgroundColor: 'white',
    width: '80%',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 12,
  },
  resultContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SearchComputer;

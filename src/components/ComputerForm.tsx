import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import useComputerStore from '../store/computerStore';

const ComputerForm: React.FC = () => {
  const [id, setId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');
  const [classroomId, setClassroomId] = useState('AULA_1');  
  const { addComputer, computers, loading } = useComputerStore();

  const handleSubmit = async () => {
    if (id && studentName && grade) {
      await addComputer({ id, studentName, grade, classroomId });
      setId('');  
      setStudentName('');
      setGrade('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Agregar nueva computadora</Text>
      
      <TextInput style={styles.input} value={id} onChangeText={setId} placeholder="ID" />
      <TextInput style={styles.input} value={studentName} onChangeText={setStudentName} placeholder="Nombre del estudiante" />
      <TextInput style={styles.input} value={grade} onChangeText={setGrade} placeholder="Grado" />
      <TextInput
        style={styles.input}
        value={classroomId}
        onChangeText={setClassroomId}
        placeholder="Aula"
      />

      <Button
        title={loading ? 'Guardando...' : 'Guardar'}
        onPress={handleSubmit}
        disabled={loading || !id || !studentName || !grade}
      />
      
      <FlatList
        data={computers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.computerItem}>
            <Text>📌 Estudiante: {item.studentName}</Text>
            <Text>📚 Grado: {item.grade}</Text>
            <Text>🏫 Aula: {item.classroomId}</Text>
            <Text>💻 ID: {item.id}</Text> 
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay computadoras registradas</Text>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  formContainer: { padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  input: { height: 40, borderWidth: 1, paddingHorizontal: 8, marginBottom: 12, backgroundColor: 'white' },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
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
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});

export default ComputerForm;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../type';

type MainMenuNavigationProp = StackNavigationProp<RootStackParamList, 'MainMenu'>;

const MainMenu: React.FC = () => {
  const navigation = useNavigation<MainMenuNavigationProp>(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      <Button 
        title="Añadir Computadora" 
        onPress={() => navigation.navigate('Agregar Computadora')} 
      />
      <Button 
        title="Buscar Computadora" 
        onPress={() => navigation.navigate('Buscar Computadora')} 
      />
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
});

export default MainMenu;

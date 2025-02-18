import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './src/screens/MainMenu';
import SearchComputer from './src/screens/SearchComputer';
import { RootStackParamList } from './src/type';
import ComputerForm from './src/components/ComputerForm';

const Stack = createStackNavigator<RootStackParamList>(); 

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="Agregar Computadora" component={ComputerForm} />
      <Stack.Screen name="Buscar Computadora" component={SearchComputer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

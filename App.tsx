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
    
  <MainMenu></MainMenu>
  </NavigationContainer>
);

export default App;

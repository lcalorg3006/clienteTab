import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComputerManagement from './ComputerManagement';
import SearchComputer from './SearchComputer';
import Ionicons from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'help-circle';
          
          if (route.name === 'SearchComputer') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'ComputerManagement') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="ComputerManagement"
        component={ComputerManagement}
        options={{ tabBarLabel: 'Agregar' }}
      />
      <Tab.Screen
        name="SearchComputer"
        component={SearchComputer}
        options={{ tabBarLabel: 'Buscar' }}
      />
    </Tab.Navigator>
  );
}

export default Main;
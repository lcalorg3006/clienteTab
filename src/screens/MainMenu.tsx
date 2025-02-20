import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComputerManagement from './ComputerManagement';
import SearchComputer from './SearchComputer';

const Tab = createBottomTabNavigator();

function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => null, 
        tabBarLabel: () => {
          if (route.name === 'SearchComputer') {
            return (
              <View style={{ alignItems: 'center', marginTop: -29 }}>
                <Text style={{ fontSize: 20 }}>🔍</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>Buscar</Text>
              </View>
            );
          } else if (route.name === 'ComputerManagement') {
            return (
              <View style={{ alignItems: 'center', marginTop: -29 }}>
                <Text style={{ fontSize: 20 }}>➕</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>Agregar</Text>
              </View>
            );
          }
          return null;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="ComputerManagement"
        component={ComputerManagement}
        options={{ headerTitle: 'Añadir Computadoras' }}
      />
      <Tab.Screen
        name="SearchComputer"
        component={SearchComputer}
        options={{ headerTitle: 'Buscar Computadora' }}
      />
    </Tab.Navigator>
  );
}

export default MainMenu;
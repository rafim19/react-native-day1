import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* Pertama kali masuk ke CounterScreen */}
      <Stack.Navigator 
        // screenOptions={{ headerShown: false }}
        initialRouteName={'CounterScreen'}
      >
        <Stack.Screen name={"CounterScreen"} component={CounterScreen} />
        <Stack.Screen name={"TodoListScreen"} component={TodoListScreen} />
        <Stack.Screen name={"DetailTodoScreen"} component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

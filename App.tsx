import React from 'react';
// Importing components
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import AppNavigation from './src/navigation';
// import BasicComponent from './src/components/BasicComponents';
// import CounterScreen from './src/screens/CounterScreen';
import TodoListScreen from './src/screens/TodoListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.base}>
      {/* <BasicComponent /> */}
      {/* <CounterScreen /> */}
      {/* <TodoListScreen /> */}
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    display: 'flex',
    flex: 1
  },
  backgroundView: {
    backgroundColor: "grey",
    height: "50%"
  },

  sampleText: {
    color: "white",
    fontSize: 24
  },

  // kalau pake px jangan di wrap pake string
  button: {
    backgroundColor: "red",
    height: 50,
    width: 50
  },

  image: {
    height: 100,
    width: 100
  }
});

export default App;

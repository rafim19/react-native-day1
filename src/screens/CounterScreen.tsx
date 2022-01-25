import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ChangeBackroundColor from '../components/ChangeBackroundColor';
import { useNavigation } from '@react-navigation/native';

// State and Props
// State -> value yang ada di satu component
// Props -> state yang dilempar ke component lain (value nya gabisa diubah (immutable))
const CounterScreen = () => {
  // * STATE
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('green');

  // Enable navigation di CounterScreen
  const navigation = useNavigation();
  
  useEffect(() => {
    if (counter === 5) {
      setBackgroundColor('grey');
    }
  }, [counter]);

  useEffect(() => {
    // waktu pertama kali halaman di load, mau ngejalanin sesuatu
    // example: panggil API, dll.
    // dependency gaboleh kosong, minimal ada array kosong
  }, [])

  const increaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const decreaseCounter = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  const toggleBackgroundColor = (backgroundColor: string) => {
    setBackgroundColor(backgroundColor)
  }

  const navigateToTodoList = () => {
    // Mengarahkan ke screen TodoListScreen
    navigation.navigate("TodoListScreen");
  }

  return (
    <View style={[style.container, { backgroundColor: backgroundColor }]}>
      <Text style={[style.textCounter, style.textBlack]}>Counter: {counter}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TouchableOpacity 
          style={style.btnIncrement} 
          onPress={increaseCounter}
        >
          <Text style={style.textBtn}>Increase Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={style.btnIncrement}
          onPress={decreaseCounter}
        >
          <Text style={style.textBtn}>Decrease Counter</Text>
        </TouchableOpacity>
      </View>
      <ChangeBackroundColor counter={counter} toggleBackgroundColor={toggleBackgroundColor}/>
      <TouchableOpacity 
        style={style.btnIncrement}
        onPress={navigateToTodoList}
      >
        <Text style={style.textBtn}>Navigate to Todolist Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    flex: 1
  },
  textCounter: {
    fontSize: 20
  },
  textBlack: {
    color: "#000000"
  },
  btnIncrement: {
    backgroundColor: '#222436',
    padding: 12,
    margin: 10,
    display: 'flex',
    alignItems: 'center'
  },
  textBtn: {
    color: 'white'
  }
})

export default CounterScreen;

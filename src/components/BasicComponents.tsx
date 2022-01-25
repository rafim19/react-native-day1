import  React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Functional Component
const BasicComponent = () => {
  const buttonOnPress = () => {
    console.log("Pencet")
  }

  const imageSource = {
    uri: 'https://reactnative.dev/img/tiny_logo.png'
  }

  const localImageSource = require('../../images/tiny_logo.png')

  return (
    <View style={styles.backgroundView}>
      <Text style={styles.sampleText}>Hello World!</Text>
      <Button title='Tombol' onPress={buttonOnPress}></Button>
      <TouchableOpacity onPress={buttonOnPress}>
        <View style={styles.button}>
          <Text>Touchable</Text>
        </View>
      </TouchableOpacity>
      <Image 
        style={styles.image} 
        source={imageSource}>
      </Image>
      <Image 
        style={styles.image} 
        source={localImageSource}>
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    // height: "100%",
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

export default BasicComponent;
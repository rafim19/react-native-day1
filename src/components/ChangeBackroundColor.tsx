import { View, Text, Button } from 'react-native';
import React from 'react';

interface IChangeBackgroundColorProps {
  counter: number; // number | String | boolean
  toggleBackgroundColor: (backgroundColor: string) => void;
}

const ChangeBackroundColor = (props: IChangeBackgroundColorProps) => {

  const toggleBackground = () => {
    const { counter, toggleBackgroundColor } = props;
    if (counter < 5) {
      toggleBackgroundColor('green')
    } else if (counter > 5) {
      toggleBackgroundColor('white')
    }
  }

  return (
    <View>
      <Button 
        title={'Toggle Background Color'}
        onPress={toggleBackground}
      />
    </View>
  );
};

export default ChangeBackroundColor;

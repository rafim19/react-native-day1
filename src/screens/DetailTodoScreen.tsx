import { View, Text } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStackParamList';

const DetailTodoScreen = () => {
  // Agar bisa menerima parameter yang dikirim
  // const route = useRoute<RouteProp<RootStackParamList, "DetailTodoScreen">>();
  // const { id, title, description } = route.params.item;

  return (  
    <View> 
      <Text>ID: abc</Text>
      <Text>Title: title</Text>
      <Text>Description: safwfsdafa</Text>
    </View>
  );
};

export default DetailTodoScreen;

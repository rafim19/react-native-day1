import { View, Text, StyleSheet, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ITodoListItem } from '../interfaces';
import { useNavigation } from '@react-navigation/native';

const TodoListScreen = () => {

  const [todos, setTodos] = useState<ITodoListItem[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTodoList()
  }, []);
  
  const fetchTodoList = () => {
    setTodos(dummyTodos)
  }

  const navigateToDetailTodoScreen = (item: ITodoListItem) => {
    navigation.navigate("DetailTodoScreen", {
      item: item
    })
  }

  // function untuk menentukan styling setiap item di dalam ITodoListItem
  const renderTodoItem = (renderItemInfo: ListRenderItemInfo<ITodoListItem>) => {
    const { item, index } = renderItemInfo;
    return (
      <TouchableOpacity onPress={() => navigateToDetailTodoScreen(item)}>
        <View style={styles.item}>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {/* FlatList ngelooping sebuah data (array / object / dll) */}
      <FlatList 
        data={todos}
        renderItem={renderTodoItem}
        // Kalau primary key nya bukan id, bisa pakai keyExtractor
        // keyExtractor={(item, index) => item.title.toString()}
      />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },

  item: {
    padding: 15
  }
});

const dummyTodos: ITodoListItem[] = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit, autem iste placeat deserunt sapiente corrupti, odio voluptatibus esse fuga temporibus eius sit nesciunt architecto numquam quod et quae optio.'
  }
]
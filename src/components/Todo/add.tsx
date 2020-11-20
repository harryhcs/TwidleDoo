import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {addTodo} from '../../store/todos/actions';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('Add todo...');

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: `${Math.floor(Date.now() / 1000)}`,
        title: todo,
        complete: false,
      }),
    );
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />
      <TouchableOpacity onPress={handleAddTodo}>
        <Text>AddTodo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  input: {
    padding: 10,
  },
});

export default AddTodo;

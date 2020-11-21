import React, {useState, useRef} from 'react';
import {StyleSheet, SafeAreaView, TextInput} from 'react-native';

import {addTodo} from '../../store/todos/actions';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('Add todo...');

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: `${new Date().valueOf()}`,
        title: todo,
        complete: false,
      }),
    );
    setTodo('Add todo...');
    inputRef.current.blur();
  };

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        ref={inputRef}
        autoFocus
        onFocus={() => setTodo('')}
        style={styles.input}
        onChangeText={(text) => setTodo(text)}
        onSubmitEditing={handleAddTodo}
        value={todo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
  },
  button: {
    backgroundColor: '#0075a2',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AddTodo;

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {toggleTodo} from '../store/todos/actions';
import {useDispatch} from 'react-redux';

interface Props {
  complete: boolean;
  id: string;
}

const CheckCircle = ({complete, id}: Props) => {
  const dispatch = useDispatch();
  const handleToggleTodo = () => {
    dispatch(toggleTodo(complete, id));
  };
  return (
    <TouchableOpacity
      onPress={handleToggleTodo}
      style={complete ? styles.fullCircle : styles.emptyCircle}
    />
  );
};

const styles = StyleSheet.create({
  emptyCircle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  fullCircle: {
    width: 25,
    height: 25,
    backgroundColor: '#EFBCC7',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#E79AAB',
  },
});

export default CheckCircle;

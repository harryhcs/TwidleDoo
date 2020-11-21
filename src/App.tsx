import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Provider} from 'react-redux';

import store from './store';

import TodoList from './components/Todo/list';
import AddTodo from './components/Todo/add';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        
        <View style={styles.header}>
          <Text style={styles.title}>TwidleDoo's</Text>
        </View>
        <AddTodo />
        <TodoList complete={false} />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
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
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;

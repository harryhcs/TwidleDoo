import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Provider} from 'react-redux';

import store from './store';

import TodoList from './components/Todo/list';
import CompletedList from './components/Todo/complete';
import AddTodo from './components/Todo/add';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>TwidleDoo's</Text>
        </View>
        <AddTodo />
        <TodoList />
        <CompletedList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
  },
});

export default App;

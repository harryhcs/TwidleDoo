import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './store/configureStore';

import TodoList from './components/Todo/list';
import CompletedList from './components/Todo/complete';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.title}>TwidleDoo's</Text>
          </View>
          <TodoList />
          <CompletedList />
        </SafeAreaView>
      </PersistGate>
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

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import CheckCircle from '../CheckCircle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import CompleteList from './complete';
interface TotoItem {
  item: any;
}

interface Props {
  complete: boolean;
}

const Item = ({item}: TotoItem) => {
  return (
    <View style={styles.item}>
      <CheckCircle complete={item.complete} id={item.id} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const TodoList = (props: Props) => {
  const selectTodos = (state: RootState) => state.todos;
  const todos = useSelector(selectTodos).todos.filter(
    (todo) => todo.complete === props.complete,
  );
  const renderItem = ({item}: TotoItem) => <Item item={item} />;

  if (todos.length) {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </>
    );
  }
  return <CompleteList />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 35,
    borderColor: '#888',
    borderBottomWidth: 1,
    maxHeight: '80%',
  },
  item: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    overflow: 'scroll',
  },
});

export default TodoList;

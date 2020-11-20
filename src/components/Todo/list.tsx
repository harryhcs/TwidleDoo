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
import {useDispatch, useSelector} from 'react-redux';

interface TotoItem {
  item: any;
}
interface State {
  state: any; 
}


const Item = ({item}: TotoItem) => (
  <View style={styles.item}>
    <CheckCircle complete={item.complete} />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const TodoList = () => {
  const {todos} = useSelector(({state}: State) => state.todos);
  const renderItem = ({item}: TotoItem) => <Item item={item} />;
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
};

const styles = StyleSheet.create({
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

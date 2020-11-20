import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import CheckCircle from '../CheckCircle';

const DATA = [
  {
    id: '58614a0f-3da1-471f-bd96-145571e29d72',
    title: 'Milk',
    complete: true,
  },
  {
    id: '58624a0f-3da1-471f-bd96-145571e29d72',
    title: 'Get some bread',
    complete: true,
  },
];

interface TodoTitle {
  title: string;
}
interface TotoItem {
  item: any;
}

const Item = ({title}: TodoTitle) => (
  <View style={styles.item}>
    <CheckCircle complete={true} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CompletedList = () => {
  const renderItem = ({item}: TotoItem) => <Item title={item.title} />;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTitle}>Completed</Text>
          <TouchableOpacity>
            <Text style={styles.containerExpand}>Show</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  containerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 16,
  },
  containerExpand: {
    fontSize: 14,
    marginVertical: 16,
    color: '#DA627D',
  },

  item: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 16,
    // marginHorizontal: 35,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default CompletedList;

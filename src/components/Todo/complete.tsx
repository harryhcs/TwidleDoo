import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Complete = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Shaweet!!</Text>
      <Text style={styles.inform}>You finished all your chores!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
  },
  inform: {
    fontSize: 14,
  },
});

export default Complete;

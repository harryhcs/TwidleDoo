import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Complete {
  complete: boolean;
}

const CheckCircle = ({complete}: Complete) => {
  return (
    <TouchableOpacity
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

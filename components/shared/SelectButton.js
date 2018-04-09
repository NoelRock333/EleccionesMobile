import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';

const SelectButton = ({ children, isSelected, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, isSelected && { backgroundColor: 'purple' }]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && { color: 'white' }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 18,
    paddingTop: 18,
    alignItems: 'center',
    width: '100%',
    borderRadius: 6
  },
  text: {
    fontSize: 17
  }
});

export default SelectButton;

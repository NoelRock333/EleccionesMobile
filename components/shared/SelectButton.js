import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';

const SelectButton = ({ children, isSelected, onPress }) => {
  return (
    <Button 
      large
      block
      light
      style={[styles.button, isSelected && { backgroundColor: 'purple' }]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && { color: 'white' }]}>{children}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    backgroundColor: '#ebebeb'
  },
  text: {
    fontSize: 17
  }
});

export default SelectButton;

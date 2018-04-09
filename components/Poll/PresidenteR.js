import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Icon } from 'native-base';
import SelectButton from '../shared/SelectButton';

class PresidenteR extends React.Component {
  state = {
    selectedOpt: null
  }

  isSelected = indentifier => {
    if (indentifier == this.state.selectedOpt)
      return true;
    else 
      return false;
  };

  selection = option => {
    this.setState({ selectedOpt: option })
  };

  render() {
    const { selectedOpt } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{ padding: 30, textAlign: 'center' }}>
          Si en éste momento fuera el día de la elección, <Text style={{ fontWeight: 'bold' }}>¿por quién votaría?</Text>
        </Text>

        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Presidente de la República
        </Text>

        <View style={{ marginTop: 20, padding: 10 }}>
          <SelectButton
            isSelected={this.isSelected('PPMEADE', selectedOpt)}
            onPress={() => this.selection('PPMEADE')}
          >
            José Antonio Meande
          </SelectButton>
          <SelectButton
            isSelected={this.isSelected('AMLO', selectedOpt)}
            onPress={() => this.selection('AMLO')}
          >
            Andres Manuel Lopez Obrador
          </SelectButton>
          <SelectButton
            isSelected={this.isSelected('ANAYA', selectedOpt)}
            onPress={() => this.selection('ANAYA')}
          >
            Ricardo Anaya
          </SelectButton>
          <SelectButton
            isSelected={this.isSelected('MARGARITA', selectedOpt)}
            onPress={() => this.selection('MARGARITA')}
          >
            Margarita Zavala
          </SelectButton>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={this.next}>
            <View style={styles.nextButton}>
              <Icon name="ios-play" style={{ fontSize: 34, color: 'white' }}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10
  },
  nextButton: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4
  }
});

export default PresidenteR;
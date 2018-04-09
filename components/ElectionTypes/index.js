import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, H1, Icon } from 'native-base';
import SelectButton from '../shared/SelectButton';

class Municipalities extends React.Component {
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
        <View style={styles.title}>
          <H1>Resultados de Encuestas</H1>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, paddingLeft: 10, paddingRight: 5 }}>
            <SelectButton
              isSelected={this.isSelected('PRESIDENTE_R', selectedOpt)}
              onPress={() => this.selection('PRESIDENTE_R')}
            >
              PRESIDENTE DE LA REPÚBLICA
            </SelectButton>
            <SelectButton
              isSelected={this.isSelected('SENADOR', selectedOpt)}
              onPress={() => this.selection('SENADOR')}
            >
              SENADOR
            </SelectButton>
            <SelectButton
              isSelected={this.isSelected('DIPUTADO1', selectedOpt)}
              onPress={() => this.selection('DIPUTADO1')}
            >
              DIPUTADO FEDERAL
            </SelectButton>
            <SelectButton
              isSelected={this.isSelected('DIPUTADO2', selectedOpt)}
              onPress={() => this.selection('DIPUTADO2')}
            >
              DIPUTADO LOCAL
            </SelectButton>
            <SelectButton
              isSelected={this.isSelected('PRESIDENTE_M', selectedOpt)}
              onPress={() => this.selection('PRESIDENTE_M')}
            >
              PRESIDENTE MUNICIPAL
            </SelectButton>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity>
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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
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
})

export default Municipalities;

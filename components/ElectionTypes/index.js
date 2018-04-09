import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, H1, Icon } from 'native-base';
import SelectButton from '../shared/SelectButton';

class Municipalities extends React.Component {
  state = {
    selectedOpt: null,
    options: [
      {
        indentifier: 'PRESIDENTE_R',
        title: 'PRESIDENTE DE LA REPÚBLICA'
      },
      {
        indentifier: 'SENADOR',
        title: 'SENADOR'
      },
      {
        indentifier: 'DIPUTADO1',
        title: 'DIPUTADO FEDERAL'
      },
      {
        indentifier: 'DIPUTADO2',
        title: 'DIPUTADO LOCAL'
      },
      {
        indentifier: 'PRESIDENTE_M',
        title: 'PRESIDENTE MUNICIPAL'
      }
    ]
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

  renderOptions = (options) => {
    return options.map(option => {
      const isSelected = this.isSelected(option.indentifier, this.state.selectedOpt);
      return (
        <SelectButton
          isSelected={isSelected}
          onPress={() => this.selection(option.indentifier)}
          key={option.indentifier}
        >
          {option.title}
        </SelectButton>
      );
    })
  };

  render() {
    const { options } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <H1>Resultados de Encuestas</H1>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, paddingLeft: 10, paddingRight: 5 }}>
            {this.renderOptions(options)}
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

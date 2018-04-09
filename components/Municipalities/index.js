import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, H1, Icon } from 'native-base';
import SelectButton from '../shared/SelectButton';

class Municipalities extends React.Component {
  state = {
    selectedOpt: null
  }

  next = () => {
    this.props.navigation.navigate('ElectionTypes');
  };

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
          <H1>Municipios</H1>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, paddingLeft: 10, paddingRight: 5 }}>
            <SelectButton
              isSelected={this.isSelected('COLIMA', selectedOpt)}
              onPress={() => this.selection('COLIMA')}
            >
              COLIMA
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('MANZA', selectedOpt)}
              onPress={() => this.selection('MANZA')}
            >
              MANZANILLO
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('COMALA', selectedOpt)}
              onPress={() => this.selection('COMALA')}
            >
              COMALA
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('COQUI', selectedOpt)}
              onPress={() => this.selection('COQUI')}
            >
              COQUIMATLÁN
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('MINA', selectedOpt)}
              onPress={() => this.selection('MINA')}
            >
              MINATITLÁN
            </SelectButton>

          </View>
          <View style={{ flex: 1, paddingLeft: 5, paddingRight: 10 }}>
            <SelectButton
              isSelected={this.isSelected('VDEA', selectedOpt)}
              onPress={() => this.selection('VDEA')}
            >
              VILLA DE ÁLVAREZ
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('TECO', selectedOpt)}
              onPress={() => this.selection('TECO')}
            >
              TECOMÁN
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('CUAU', selectedOpt)}
              onPress={() => this.selection('CUAU')}
            >
              CUAHUTÉMOC
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('ARMERIA', selectedOpt)}
              onPress={() => this.selection('ARMERIA')}
            >
              ARMERIA
            </SelectButton>

            <SelectButton
              isSelected={this.isSelected('IXTLA', selectedOpt)}
              onPress={() => this.selection('IXTLA')}
            >
              IXTLAHUACÁN
            </SelectButton>

            

          </View>
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

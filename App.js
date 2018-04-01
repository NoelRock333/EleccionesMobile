/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SInfo from 'react-native-sensitive-info';

const options = {
  sharedPreferencesName: 'tallerRN',
  keychainService: 'tallerRN'
};

export default class App extends Component {
  state = {
    isLoged: null
  };

  componentDidMount() {
    const jwt = SInfo.getItem('jwt', options).then(value => {
      console.warn(value);
      this.setState({
        isLoged: value ? true : false
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

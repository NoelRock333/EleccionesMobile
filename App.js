/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import Api from './utils/api';

export default class App extends Component {
  state = {
    isLoged: null
  };

  async componentDidMount() {
    const jwt = await AsyncStorage.getItem('jwt');
    console.log(jwt);
    // this.setState({
    //   isLoged: value ? true : false
    // });
  }

  login = useraccount => {
    return Api.post('/users/login', useraccount)
      .then(data => data.json())
      .then(data => {
        if (data && data.jwt) {
          AsyncStorage.setItem('jwt', data.jwt).then(() => {
            this.setState({
              isLoged: true
            });
          })
        } else {
          this.setState({
            isLoged: false
          });
        }
      });
  };

  logout = () => {
    AsyncStorage.removeItem('jwt');
    this.setState({
      isLoged: false
    });
  };

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

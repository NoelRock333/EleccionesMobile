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
  AsyncStorage,
  TextInput,
  Button
} from 'react-native';
import Api from './utils/api';
import Login from './components/Login'

export default class App extends Component {
  state = {
    isLoged: null
  };

  async componentDidMount() {
    const jwt = await AsyncStorage.getItem('@EleccionesApp:jwt');
    this.setState({
      isLoged: jwt ? true : false
    });
  }

  login = useraccount => {
    return Api.post('/users/login', useraccount)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        if (data && data.jwt) {
          AsyncStorage.setItem('@EleccionesApp:jwt', data.jwt).then(() => {
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
    AsyncStorage.removeItem('@EleccionesApp:jwt');
    this.setState({
      isLoged: false
    });
  };

  render() {
    if (!this.state.isLoged) {
      return <Login login={this.login} />;
    } else {
      return <View>
        <Text>Logueado</Text>
        <Button title="Cerrar sesión" onPress={this.logout} />
      </View>
    }
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

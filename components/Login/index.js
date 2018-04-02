import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  login = () => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return (
      <View>
        <Text>Usuario</Text>
        <TextInput onChangeText={(email) => this.setState({ email })} />
        <Text>Contraseña</Text>
        <TextInput onChangeText={(password) => this.setState({ password })} />
        <Button title="Iniciar sesión" onPress={this.login} />
      </View>
    )
  }
}

export default Login;

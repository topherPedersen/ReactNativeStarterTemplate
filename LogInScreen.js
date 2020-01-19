import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailTextInput: "",
      passwordTextInput: ""
    };
  }

  handleLogInWithEmail(navCallback) {

    // TODO: Signup the user using their email or password and an AJAX
    // call to the server. After successful signup, present the main
    // application using the navCallback() function

    // navCallback presents main application after successful login
    navCallback(); 
  }

  handleEmailTextInput(text) {
    let previousState = this.state;
    let newState = previousState;
    newState.emailTextInput = text;
    this.setState(newState);
  }

  handlePasswordTextInput(text) {
    let previousState = this.state;
    let newState = previousState;
    newState.passwordTextInput = text;
    this.setState(newState);
  }

  render() {

    let navigateToMainApplication = () => this.props.navigation.navigate('AppNav');

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>LoginScreen</Text>

            <TextInput 
              placeholder="Email" 
              onChangeText={ (text) => this.handleEmailTextInput(text) } 
              value={this.state.emailTextInput} />

            <TextInput 
              placeholder="Password" 
              onChangeText={ (text) => this.handlePasswordTextInput(text) } 
              value={this.state.passwordTextInput} />

            <Button 
              title="Log In" 
              onPress={ () => this.handleLogInWithEmail(navigateToMainApplication) } />

        </View>
    );
  }
}

export default LoginScreen;
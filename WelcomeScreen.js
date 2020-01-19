import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Aerotel</Text>

        <Button 
          title="Create an account"
          onPress={ () => this.props.navigation.navigate('SignUp') } />

        <Button
          title="I already have an account"
          onPress={ () => this.props.navigation.navigate('LogIn') } />

      </View>
    );
  }
}

export default WelcomeScreen;
import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
// Import React Navigation "NavigationService"
import NavigationService from './NavigationService';

class PageOneScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>PageOneScreen</Text>
        
      </View>
    );
  }
}

export default PageOneScreen;
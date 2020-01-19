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

class PageFiveScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>PageFiveScreen</Text>
        
      </View>
    );
  }
}

export default PageFiveScreen;
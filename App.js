import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
// Import React Native Gesture Handler (React Navigation Dependency)
import 'react-native-gesture-handler';
// Import React Navigation
import { 
  createAppContainer, 
  createSwitchNavigator
} from 'react-navigation';
import NavigationService from './NavigationService';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// Import Aerotel Components/Screens
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';
import PageOneScreen from './PageOneScreen';
import PageTwoScreen from './PageTwoScreen';
import PageThreeScreen from './PageThreeScreen';
import PageFourScreen from './PageFourScreen';
import PageFiveScreen from './PageFiveScreen';

/*
 *******************************************************************************
 *******************************************************************************
  
  REACT NAVIGATION DIAGRAM
  Our app will consist of two main navigators: 
    - LoginNavigator (StackNavigator)
    - AppNavigator (TabNavigator)
  However, the AppNavigator (which is a BottomTabNavigator) will need to be
  nested inside of a StackNavigator soley for the purpose of displaying a top
  tab bar at the same time as our bottom tab bar. This is somewhat of a
  confusting design flaw of React Navigation, but this is type of nesting is how
  the library was intended to be used:
  - AppNavigatorWrapper (StackNavigator with top-tab-bar)
    - AppNavigator (TabNavigator, with bottom-tab-bar)
  Furthermore, these three navigators will be nested inside of a fourth 
  navigator called: 
    - ParentNavigator (SwitchNavigator)
  This SwitchNavigator will allow us to determine whether we would like to
  display the LoginNavigator to users who have not been authenticated and need
  to either signup or login. Or if the user has been authenticated, the 
  SwitchNavigator will let us display our AppNavigator and AppNavigatorWrapper.
  Also of note: Our bottom-tab-bar will actually be a materialTopTabNavigator
  with th tabBarPosition set to 'bottom'. We have done this because the
  materialTopTabNavigator is swipeable, allowing us to implement a swipeable
  bottom-tab-bar where users can swipe between the main screens. The 
  materialBottomTabNavigator is not swipeable however, so this is why we are 
  using the materialTopTabNavigator instead.
 *******************************************************************************
 *******************************************************************************
 */

// Create LoginNavigator
const loginNavigatorConfig = {
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  LogIn: LogInScreen
};
const LoginNavigator = createStackNavigator(loginNavigatorConfig);

// Create AppNavigator
let appNavigatorConfig = [];
appNavigatorConfig[0] = {
  PageOne: PageOneScreen,
  PageTwo: PageTwoScreen,
  PageThree: PageThreeScreen,
  PageFour: PageFourScreen,
  PageFive: PageFiveScreen
};
appNavigatorConfig[1] = {
  initialRouteName: 'PageOne',
  tabBarPosition: 'bottom',
  swipeEnabled: true
};
const AppNavigator = createMaterialTopTabNavigator(
  appNavigatorConfig[0], 
  appNavigatorConfig[1]
);

// Create AppNavigatorWrapper
const topTabBarConfig = {
  headerTitle: "Aerotel"
}
let appNavigatorWrapperConfig = []; 
appNavigatorWrapperConfig[0] = {
  App: {
    screen: AppNavigator,
    navigationOptions: topTabBarConfig
  }
};
appNavigatorWrapperConfig[1] = {
  initialRouteName: 'App'
}
const AppNavigatorWrapper = createStackNavigator(
  appNavigatorWrapperConfig[0], 
  appNavigatorWrapperConfig[1]
);

// Create ParentNavigator (SwitchNavigator)
let parentNavigatorConfig = [];
parentNavigatorConfig[0] = {
  LogInNav: LoginNavigator,
  AppNav: AppNavigatorWrapper
};

parentNavigatorConfig[1] = {
  initialRouteName: 'LogInNav'
};

const parentNavigator = createSwitchNavigator(
  parentNavigatorConfig[0],
  parentNavigatorConfig[1]
);

const AppContainer = createAppContainer(parentNavigator);

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // do stuff
  }

  componentDidMount() {
    // do stuff
  }

  render() {

    // NOTE: Regarding the NavigationService.setTopLevelNavigator() method below,
    // This was added as a requirement of React Navigation to allow us to 
    // programmatically navigate in our application using JavaScript without
    // having to use this.props.navigation.navigate()
    
    return(
      <AppContainer 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default App;
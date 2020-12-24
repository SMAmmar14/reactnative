import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/stack';



//import Screens
import OnboardingScreen from './screens/onboardingScreen';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const AppStack = createStackNavigator();

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headermode="none">

          <AppStack.Screen name="onboardingScreen" Component={OnboardingScreen} />



        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}


import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



//import Screens
import onboardingScreen from './screens/onboardingScreen';

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

          <AppStack.Screen name="onboardingScreen" Component={onboardingScreen} />



        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './App/Views/Home.js';
import { Login } from './App/Views/Login.js';
import { SignUp } from './App/Views/SignUp.js';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      header: null,
    }),
  }
},
{
  initialRouteName: "Login"
}
);


const App = createAppContainer (MainNavigator);


export default App;


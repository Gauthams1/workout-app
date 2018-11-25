/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login/Login';
import Home from './Home/Home';
import store from './Store/store';
import Add from './Add/Add';
import User from './User/User';

const RootStack =  createAppContainer(createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Add: {
    screen: Add
  },
  User: {
    screen: User
  }
},
  {
    initialRouteName: 'Home',
    headerMode :'none'
  }));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
      );
  }
}

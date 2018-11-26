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
import store from './Store/store';
import RootStack from './Nav/Nav';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
      );
  }
}

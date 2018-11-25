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
    View,
    ImageBackground
} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {  createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home/Home';
import Calender from './Calender/Calender';
import Settings from './Settings/Settings';
import History from './History/History';
export default createMaterialBottomTabNavigator({
    Calender: {screen:Calender},
    Home: {screen:Home},
    Settings: {screen:Settings},
},{
  shifting:true,
  labeled:false,
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName,iconSize;
        if (routeName === 'Home') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          iconSize=20;
        } else if (routeName === 'Calender') {
          iconName = `ios-calendar${focused ? '' : ''}`;
          iconSize=20;
        }else if (routeName === 'Settings') {
          iconName = `ios-stats${focused ? '' : ''}`;
          iconSize=20;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
  initialRouteName: 'Home',
  activeColor: '#3e2465',
  inactiveColor: '#f0edf6',
  barStyle: { backgroundColor: '#ffffff' },
});

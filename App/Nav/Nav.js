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
import { createStackNavigator, createAppContainer,createMaterialBottomTabNavigator } from 'react-navigation';
import Login from '../Login/Login';
import Home from '../Home/Home';
import store from '../Store/store';
import Add from '../Add/Add';
import Task from '../Add/Tasks';
import User from '../User/User';

export default RootStack =  createAppContainer(createStackNavigator({
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
  },
  Task: {
    screen: Task
  }
},
  {
    initialRouteName: 'Login',
    headerMode :'none'
  }));

// export const Blackstart =  createAppContainer(createMaterialBottomTabNavigator({
//     Calender: {screen:Calender},
//     Home: {screen:Home},
//     Settings: {screen:Settings},
// },{
//   shifting:true,
//   labeled:false,
//   defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName,iconSize;
//         if (routeName === 'Home') {
//           iconName = `ios-add-circle${focused ? '' : '-outline'}`;
//           iconSize=20;
//         } else if (routeName === 'Calender') {
//           iconName = `ios-calendar${focused ? '' : ''}`;
//           iconSize=20;
//         }else if (routeName === 'Settings') {
//           iconName = `ios-stats${focused ? '' : ''}`;
//           iconSize=20;
//         }

//         return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//       },
//     }),
//   initialRouteName: 'Home',
//   activeColor: '#3e2465',
//   inactiveColor: '#f0edf6',
//   barStyle: { backgroundColor: '#ffffff' },
// });
// );

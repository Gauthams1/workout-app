/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {  createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Body, Right, Button, Title, Icon, Thumbnail} from 'native-base';
import Home from './Home/Home';
import Calender from './Calender/Calender';
import Settings from './Settings/Settings';
const Rootstack = createAppContainer(createMaterialBottomTabNavigator({
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
}));
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
              <Header transparent>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate('User')}>
                    <Thumbnail small source={{uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'}} />
                </Button>
            </Left>

            <Body style={{alignItems:'center',justifyContent:'center',color:'black'}}>
                <Title style={{color:'black'}}></Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate('Add')}>
                    <Icon name='add' style={{fontSize: 30, color: 'black'}} />
                </Button>
            </Right>
        </Header>
        <Rootstack />
      </View>
      );
  }
}


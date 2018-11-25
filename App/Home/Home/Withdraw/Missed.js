/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import {Platform, StyleSheet, View, FlatList, Share, TouchableOpacity} from 'react-native';
import {Header,Container, Left, Body, Right, Button, Title, Text,Content,Icon} from 'native-base';
import Video from 'react-native-af-video-player';
import {
    connect
} from 'react-redux'
class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
            notification: [],
            refresh: false,
        };
    }
    componentDidMount() {
     }
    render() {
        return (
      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundColor : "#0000"}} >
      </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("\n\n\n\n\n\n ----------");
    console.log(Object.keys(state.reducer1));
    return {
        reducer1: state.reducer1
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        adduser: (user) => {
            dispatch({
                type: "adduser",
                payload: user
            })
        }
    };
}
const test = connect(mapStateToProps, mapDispatchToProps)(App);
export default test;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import {Platform, StyleSheet, View, FlatList, Share, TouchableOpacity} from 'react-native';
import {Header,Container, Left, Body, Right, Button, Title, Text,Content,Icon,ListItem,H3,H1,H2} from 'native-base';
import TimeAgo from 'react-native-timeago';
import {connect} from 'react-redux'
import moment from 'moment'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

let timestamp = "2015-06-21T06:24:44.124Z";

class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
             product: [ 
            {key: 'Run 50 miles',status:false,time:'09:00 Am'},
            {key: 'Code 2 hr',status:true,time:'19:00 Am'}
            ],
            refresh: false,
        };
    }
    componentDidMount() {
     }
    render() {
        return (
      <View style={{flex: 1, flexDirection: 'column',backgroundColor : "#0000"}} >
      <View style={{flex: 2, flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundColor : "#0000"}}>
         <Text style={{fontSize:20,fontFamily:'Montserrat-Thin',margin:3}}>{moment().format('dddd')}</Text>
      </View>
      <View style={{flex: 6, alignItems: 'stretch',justifyContent: 'center',backgroundColor : "#0000"}}>
       <FlatList data={this.state.product} 
        renderItem={({item})=> <ListItem thumbnail style={{}}>
        <Left>
        <Text style={{fontFamily:'Montserrat-Medium'}}>{item.time}</Text>
        </Left>
        <Body >
        <Text style={{fontFamily:'Montserrat-Medium'}}>{item.key}</Text>
        <Text note>{item.key}</Text>
        </Body>
        <Right  style={{width:60,alignItems: 'center',justifyContent: 'center',backgroundColor:item.status?"#4dd0e1":"fff"}}>
        {item.status && <Ionicons name='ios-checkmark' size={50} style={{}} />}
        </Right>
        </ListItem>}/>
      </View>
      </View>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log("\n\n\n\n\n\n ----------");
    // console.log(Object.keys(state.reducer1));
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
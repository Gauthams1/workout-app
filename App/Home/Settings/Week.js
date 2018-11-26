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
            {key: 'Nike sport',status:true,url:'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/ms8jq491fqaacieyslpx/odyssey-react-running-shoe-9dSlGS.jpg'},
            {key: 'Mclaren Sport',status:false,url:'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8948.jpg'}],
            refresh: false,
        };
    }
    componentDidMount() {
     }
    render() {
        return (
      <View style={{flex: 1, flexDirection: 'column',backgroundColor : "#0000"}} >
      <View style={{flex: 2, flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundColor : "#0000"}}>
         <Text style={{fontSize:20,fontFamily:'Montserrat-Thin',margin:3}}>Week {moment().format('wo')}</Text>
      </View>
      <View style={{flex: 6, alignItems: 'stretch',justifyContent: 'center',backgroundColor : "#0000"}}>
         <FlatList data={this.state.product} 
        renderItem={({item})=> <ListItem thumbnail style={{}}>
        <Left>
        <Text style={{fontFamily:'Montserrat-Medium'}}>09:00 Am</Text>
        </Left>
        <Body >
        <Text style={{fontFamily:'Montserrat-Medium'}}>{item.key}</Text>
        <Text note>Text</Text>
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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import {Platform, StyleSheet, View, FlatList, Share, TouchableOpacity} from 'react-native';
import {Header,Container, Left, Body, Right, Button, Title, Text,Content,Icon,List,H3,H1,H2,ListItem,Thumbnail} from 'native-base';
import Video from 'react-native-af-video-player';
import {
    connect
} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
           product: [ 
            {key: '200 Push up',status:false,time:"09:00 Am"},
            {key: '10 Rounds Track',status:false,time:"09:00 Pm"}],
            refresh: false,
        };
    }
    componentDidMount() {
     }
    render() {
        return (    
                    <List>
                                  <FlatList data={this.state.product} 
                                    renderItem={({item})=> <ListItem thumbnail style={{}}>
                                    <Left>
                                    <Text style={{fontFamily:'Montserrat-Medium'}}>09:00 Am</Text>
                                    </Left>
                                    <Body >
                                    <Text style={{fontFamily:'Montserrat-Medium'}}>{item.key}</Text>
                                    <Text note>{item.key}</Text>
                                    </Body>
                                    <Right  style={{width:60,alignItems: 'center',justifyContent: 'center',backgroundColor:item.status?"#4dd0e1":"fff"}}>
                                    {item.status && <Ionicons name='ios-checkmark' size={50} style={{}} />}
                                    </Right>
                                    </ListItem>}/>
                   </List>
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
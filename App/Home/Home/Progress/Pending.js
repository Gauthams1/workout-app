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
class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
           product: [ 
            {key: '200 Push up',status:50,url:'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/ms8jq491fqaacieyslpx/odyssey-react-running-shoe-9dSlGS.jpg'},
            {key: '10 Rounds Track',status:30,url:'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8948.jpg'}],
            refresh: false,
        };
    }
    componentDidMount() {
     }
    render() {
        return (    
                    <List>
                            <FlatList data={this.state.product} 
                            renderItem={({item})=> <ListItem thumbnail>
                            <Left>
                            </Left>
                            <Body style={{width:'40%'}}>
                            <H3 style={{margin:10,fontWeight:'bold'}}>{item.key}</H3>
                            </Body>
                            <Right  style={{width:20}}></Right>
                            </ListItem>}/>
                   </List>
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
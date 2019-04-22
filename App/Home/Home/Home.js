/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import { Platform, StyleSheet, View, FlatList, Share, TouchableOpacity, ImageBackground } from 'react-native';
import { Header, Container, Left, Body, Right, Button, Title, Content, Icon, Thumbnail,Text,H1,H3,H2,List,ListItem} from 'native-base';
import * as Progress from 'react-native-progress';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'
import Left_Progress from './Progress/Home';
import Right_Withdraw from './Withdraw/Home';

class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
            product: [ 
            {key: 'Diet Habbit',status:50,url:'https://asset1.cxnmarksandspencer.com/is/image/mands/44e79d5a6007d11fd420b6c302d0f2fc0ef404da?$Homepage_600x330$'},
            {key: 'Refree',status:false,url:false}],
            refresh: false,
        };
    }
    componentDidMount() {}
    render() {
        return (
                <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 3,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                        <Thumbnail large source={{uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'}} />
                        <Text style={{fontSize:20,fontFamily:'Montserrat-Thin',margin:3}}>Good Job Man !</Text>
                        <Text style={{fontSize:20,fontFamily:'Montserrat-Thin',margin:3}}>you havnt missed any activities this week</Text>
                    </View>
                    <View style={{flex: 2,backgroundColor:'#fff', flexDirection: 'row',alignSelf:"stretch"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Left_Progress')} style={{flex: 1}}>
                        <View style={{flex: 1,flexDirection:'column',backgroundColor:'#111111',alignItems:'center',justifyContent:'center'}}>
                            <H3 style={{color:"#fff",fontFamily:'Montserrat-Light',margin:10}}>1.01^Upto today</H3>
                            <H1 style={{color:"#fff",fontFamily:'Montserrat-Bold',margin:10}}>10</H1>
                        </View>
                    </TouchableOpacity>   
                    
                    </View>
                    <View style={{flex: 4,backgroundColor:'#fff',marginTop:30}}>
                    <List>
                            <FlatList data={this.state.product} 
                            renderItem={({item})=> <ListItem thumbnail>
                            <Left>
                            {item.url&&<Thumbnail square large source={{ uri: item.url }} />}
                            {!item.url&&<Thumbnail square large source={require('./ref.jpeg')} />}
                            </Left>
                            <Body style={{width:'40%'}}>
                            <H3 style={{margin:10,fontWeight:'bold'}}>{item.key}</H3>
                            {item.status&&<Progress.Bar  progress={item.status/100} height={2} width={null} />}
                            </Body>
                            <Right  style={{width:20}}></Right>
                            </ListItem>}/>
                   </List>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
const RootStack =  createAppContainer(createStackNavigator({
  Left_Progress: {
    screen: Left_Progress
  },
  Right_Withdraw: {
    screen: Right_Withdraw
  },
    App: {
    screen: App
  }
},
  {
    initialRouteName: 'App',
    headerMode :'none'
  }));
export default class Home extends React.Component {
  render() {
    return (  <RootStack screenProps={{ rootNavigation: this.props.navigation }} />  );
  }
}
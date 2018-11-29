/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import { Platform, StyleSheet, View, FlatList, Share, TouchableOpacity, ImageBackground ,ScrollView, Image } from 'react-native';
import { Header, Container,Form,Item,Input,Label, Left, Body, Right, Button, Title, Content, Icon, Thumbnail, Text, H1, H3, H2, List, ListItem,Switch } from 'native-base';
import * as Progress from 'react-native-progress';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'; 

export default class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
            product: [
                { key: 'Diet Habbit', url: 'https://asset1.cxnmarksandspencer.com/is/image/mands/44e79d5a6007d11fd420b6c302d0f2fc0ef404da?$Homepage_600x330$' },
                { key: 'Running &  Gym', url: 'https://image.shutterstock.com/image-photo/young-woman-runner-running-on-260nw-359568020.jpg' },
                { key: 'Sleeping', url: 'https://image.shutterstock.com/image-photo/healthy-lifestyle-sports-woman-running-260nw-255001651.jpg' },
                { key: 'Bad Habbit', url: 'https://images.pexels.com/photos/798124/pexels-photo-798124.jpeg?auto=compress&cs=tinysrgb&h=350' },
                { key: 'Custom', url: 'https://i.kinja-img.com/gawker-media/image/upload/s--rkD57DNh--/c_scale,f_auto,fl_progressive,q_80,w_800/1884e9zof7czzjpg.jpg' },
            ],
            isDateTimePickerVisible: false,
            date_1:new Date(),
            refresh: false,
        };
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({date_1:date})
    this._hideDateTimePicker();
  };
    componentDidMount() {}
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                  
                    <View style={{flex: 4,backgroundColor:'#fff'}}>
                        <FlatList data={this.state.product} 
                            renderItem={({item})=> <TouchableOpacity onPress={()=>this.props.navigation.navigate('Task')}><View style={{flexDirection:'row',borderBottomWidth: 1, borderTopWidth: 0,borderBottomColor: '#ddd',padding:1}}>
                            <Body style={{}}>
                            <H3 style={{margin:10,fontWeight:'bold'}}>{item.key}</H3>
                            </Body>
                            <Right style={{width:140}}>
                            <Image style={{width: 140, height: 180}} source={{ uri: item.url }} />
                            </Right>
                            </View>
                            </TouchableOpacity>
                        }/>
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
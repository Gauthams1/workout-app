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
                { key: 'Nike sport', status: 50, url: 'https://asset1.cxnmarksandspencer.com/is/image/mands/44e79d5a6007d11fd420b6c302d0f2fc0ef404da?$Homepage_600x330$' },
                { key: 'Mclaren Sport', status: 30, url: 'https://images.agoramedia.com/everydayhealth/gcms/Tips-for-Better-Digestive-Health-1440X810.jpg?width=722' },
                { key: 'Mclaren Sport', status: 30, url: 'https://coda.newjobs.com/api/imagesproxy/ms/cms/content30/images/negotiate-equity.jpg' },
                { key: 'Nike sport', status: 50, url: 'https://image.shutterstock.com/image-photo/healthy-lifestyle-sports-woman-running-260nw-255001651.jpg' },
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
                    <Header transparent>
                        <Left>
                            <Button transparent>
                                <Thumbnail small source={{uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'}} />
                            </Button>
                        </Left>

                        <Body style={{alignItems:'center',justifyContent:'center',color:'black'}}>
                            <Title style={{color:'black'}}></Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='add' style={{fontSize: 30, color: 'black'}} />
                            </Button>
                        </Right>
                    </Header>
                    <View style={{flex: 4,backgroundColor:'#fff'}}>
                            <FlatList data={this.state.product} 
                            renderItem={({item})=> <View style={{flexDirection:'row',borderBottomWidth: 1, borderTopWidth: 0,borderBottomColor: '#ddd',padding:1}}>
                            <Body style={{}}>
                            <H3 style={{margin:10,fontWeight:'bold'}}>{item.key}</H3>
                            </Body>
                            <Right style={{width:140}}>
                            <Image style={{width: 140, height: 180}} source={{ uri: item.url }} />
                            </Right>
                            </View>}/>
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
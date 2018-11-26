/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import { Platform, StyleSheet, View, FlatList, Share, TouchableOpacity, ImageBackground ,ScrollView } from 'react-native';
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
                { key: 'Nike sport', status: 50, url: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/ms8jq491fqaacieyslpx/odyssey-react-running-shoe-9dSlGS.jpg' },
                { key: 'Mclaren Sport', status: 30, url: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8948.jpg' }
            ],
            isDateTimePickerVisible: false,
            date_1:new Date(),
            date_2:new Date(),
            refresh: false,
        };
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({date_1:date})
    this._hideDateTimePicker();
  };
    _handleDatePicked2 = (date) => {
    this.setState({date_2:date})
    this._hideDateTimePicker();
  };
    componentDidMount() {}
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 3,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                        <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&h=350'}} />
                    </View>
                    <View style={{flex: 6,backgroundColor:'#fff',marginTop:0,padding:10,flexDirection:'column'}}>
                    <ScrollView>
                      <List>
                        <ListItem itemDivider>
                          <Text>General</Text>
                        </ListItem>                    
                        <ListItem>
                            <Item floatingLabel>
                              <Label>Name</Label>
                              <Input />
                            </Item>
                        </ListItem>  
                        <ListItem>
                            <Item floatingLabel>
                              <Label>Description</Label>
                              <Input />
                            </Item>
                        </ListItem>  
                       <ListItem itemDivider>
                          <Text>Duration</Text>
                        </ListItem>                    
                        <ListItem>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                          <Text>{moment(this.state.date_1).format('MMMM Do YY, HH:mm')}</Text>
                        </TouchableOpacity>
                            <DateTimePicker
                              isVisible={this.state.isDateTimePickerVisible}
                              mode={'datetime'}
                              onConfirm={this._handleDatePicked}
                              onCancel={this._hideDateTimePicker}
                            />
                        </ListItem>  
                        <ListItem>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                          <Text>{moment(this.state.date_2).format('MMMM Do YY, HH:mm')}</Text>
                        </TouchableOpacity>
                            <DateTimePicker
                              isVisible={this.state.isDateTimePickerVisible}
                              mode={'datetime'}
                              onConfirm={this._handleDatePicked2}
                              onCancel={this._hideDateTimePicker}
                            />
                        </ListItem>  
                        <ListItem itemDivider>
                          <Text>Duration</Text>
                        </ListItem>                    
                        <ListItem>
                            <Item floatingLabel>
                              <Label>Amount Locking</Label>
                              <Input />
                            </Item>
                        </ListItem>  
                      </List>
                       <Button block >
                        <Text>Start the Task</Text>
                      </Button>
                      </ScrollView>
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
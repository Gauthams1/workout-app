/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import { Platform, StyleSheet, View, FlatList, Share, TouchableOpacity, ImageBackground ,ScrollView} from 'react-native';
import { Header, Container,Form,Item,Input,Label, Left, Body, Right, Button, Title, Content, Icon, Thumbnail, Text, H1, H3, H2, List, ListItem,Switch } from 'native-base';
import * as Progress from 'react-native-progress';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'; 
import ImagePicker from 'react-native-image-crop-picker';
// import AsyncStorage from '@react-native-community/async-storage';

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
            refresh: false,
            dp:'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
        };
        this.getData()
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({date_1:date})
    this._hideDateTimePicker();
  };
  getData = async () => {
  try {
    // const value = await AsyncStorage.getItem('Dp_file')
    if(value !== null) {
      this.setState({dp:value})
    }
  } catch(e) {
    // error reading value
  }
}
  disp_dp= () =>{
	  	ImagePicker.openPicker({
		  width: 300,
		  height: 400,
		  cropping: true
		}).then(image => {
			 try {
	     // await AsyncStorage.setItem('Dp_file', image.path)
	    this.setState({dp:image.path})
	  } catch (error) {
	    // Error saving data
	  }
	 
	});
  }
    componentDidMount() {}
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 2,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={this.disp_dp}>
                        <Thumbnail large source={{uri: this.state.dp}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{flex: 7,backgroundColor:'#fff',marginTop:30,flexDirection:'column'}}>
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
                        
                       <ListItem itemDivider>
                          <Text>Stats</Text>
                        </ListItem>                    
                        <ListItem>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                          <Text>{moment(this.state.date_1).format('Do MMMM YY')}</Text>
                        </TouchableOpacity>
                            <DateTimePicker
                              isVisible={this.state.isDateTimePickerVisible}
                              onConfirm={this._handleDatePicked}
                              onCancel={this._hideDateTimePicker}
                            />
                        </ListItem>  
                       <ListItem>
                        <Left>
                          <Text>Notifications</Text>
                        </Left>
                        <Right>
                          <Switch value={false} />
                        </Right>
                      </ListItem>
                      </List>
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
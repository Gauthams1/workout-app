/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import { Platform, StyleSheet, View, Dimensions,Image,TouchableOpacity,TextInput} from 'react-native';
import CreditCard from 'react-native-credit-card';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Header, Container, Left, Body, Right, Button, Title, Content, Icon, Thumbnail,Text,H1,H3,H2,List,ListItem,Item,Label,Input} from 'native-base';
const {height, width} = Dimensions.get('window');

export default class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
            value:10
        };
    }
    _onChange =(form) =>{ console.log(form);}
     focus = () => this.refs.input.focus();
    _onFocus = () => this.props.onFocus(this.props.field);
    componentDidMount() {}
    render() {
        return (
            <View style={{flex:1}}>
                <Image source={require('./added.gif')} style={styles.backgroundImage} /> 
            <Button block onPress={()=>this.props.navigation.navigate('Home')} style={{position: 'absolute', bottom: 20,width:width}}>
                <Text>Done</Text>
            </Button>     
            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    transform:[{translateX: -150},{scale:1}]
  }
});
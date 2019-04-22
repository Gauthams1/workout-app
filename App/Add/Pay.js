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
            <View style={styles.container}>
            <View style={{flex:1}}>
            <CreditCardInput onChange={this._onChange} 
            requiresName={true}
            allowScroll={true}
            inputContainerStyle={{borderBottomWidth: 0, borderBottomColor: "black"}}
            customprop={true}
            cardScale={1.5}
            />
            <TouchableOpacity activeOpacity={0.99} style={{alignItems: "center"}}>
                <View style={{ borderBottomWidth: 0, borderBottomColor: "black" }}>
                 <Text >Amount</Text>
                  <TextInput ref="input"
                    keyboardType="numeric"
                    autoCapitalise="words"
                    autoCorrect={false}
                    value={this.state.value}
                    onChangeText={(value) => this.setState({value})} />
                </View>
              </TouchableOpacity>
            <Button block onPress={()=>this.props.navigation.navigate('Conform')} style={{marginTop:20}}>
                <Text>Start the Task</Text>
            </Button>            
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height
    },
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingTop: 30
    },
        text: {
        
    },
    card: {
        marginHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 3,
        elevation: 3,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#1ba549',
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        color: '#fff'
    }

});
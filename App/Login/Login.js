/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Header, Content, Footer, Spinner, Form, Item, Label, Toast, Input, FooterTab, Button, Icon, Text, Badge, Root } from 'native-base';

var dev = !true;
let urlforlogin = dev ? "http://10.42.0.1:3000/json" : "http://13.232.19.128:3000/json";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            pagelog: true,
            processing: false
        }
        // setTimeout(this.getfetch, 1000);
    }
    datafetch = (username, password) => {
        var usname = username,
            passwd = password;
        this.postfetch(usname, passwd)

    }
    getfetch = () => {
        // fetch(urlforlogin, {
        //         method: 'get',
        //         dataType: 'json',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         credentials: 'include'
        //     }).then(response => response.json())
        //     .then(response => {
        //         if (response.user)
        //             this.props.navigation.navigate('Home')
        //     })
        this.props.navigation.navigate('Home')
    }

    postfetch = (usname, passwd) => {
        fetch(urlforlogin + '/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: usname,
                password: passwd,
            })
        }).then(res => {
            // console.log("set-cookie   " + res.headers.get('set-cookie')); // undefined
            // console.log("doc-cookie : " + document.cookie); // nope
            return res.json();
        }).then(json => {
            if (json.success) {
                this.setState({ error: '' });
                this.context.router.push(json.redirect);
            } else {
                this.setState({ error: json.error });
            }
        });
    }



    handlesubmit(e) { // e.preventDefault();
        this.setState({ processing: true })
        // this.datafetch(this.state.username, this.state.password);
        setTimeout(this.getfetch, 50);
    }
    Signup = (e) => {
        e.preventDefault();
        fetch(`${urlforlogin}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                name: this.state.name,
                password: this.state.password,
                password2: this.state.cpassword,
                email: this.state.email
            })
        }).then(function(res) { return res.json(); }).then(function(data) {}.bind(this))
    }
    processindicator = () => {
        if (this.state.processing)
            return <Spinner color='#00ffff' />;
    }
    render() {
        if (!this.state.isLoggedIn) {
            if (this.state.pagelog) {
                return (<Root>
              <Container style={{backgroundColor:'#00AFFF'}} >

                      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}} >
                      <View style={{flex: 5,alignItems: 'center',justifyContent: 'flex-end'}}>
                      <Image
                                style={{width: 100, height: 100}}
                                source={{uri: 'https://imanity.herokuapp.com/images/prj57-512x512.png'}}
                              />
                      </View>
                      {this.processindicator()}
                      <View style={{flex: 7,alignItems: 'center',width:350,marginTop:10,justifyContent: 'flex-start'}}>
                        <Item >
                          <Input placeholder="Username" ref="Username" style={{color:'#fff'}} returnKeyType="next"  onSubmitEditing={() =>{ this.refs.Password._root.focus();}} onChangeText={(username) => this.setState({username})} />
                        </Item>
                        <Item >
                          <Input secureTextEntry={true} placeholder="Password" style={{color:'#fff'}} returnKeyType="next" ref='Password' onChangeText={(password) => this.setState({password})}/>
                        </Item>
                          <Button rounded style={{marginTop:10}} block  onPress={this.handlesubmit.bind(this)}>
                          <Text>Sign in</Text>
                          </Button>

                          <TouchableOpacity style={{marginTop:20}} onPress={()=>{this.setState({pagelog:false})}}>
                          <Text>Sign Up?</Text>
                          </TouchableOpacity>

                      </View>
                      </View>

                  </Container>
                  </Root>);
            } else {
                return (<Root>
                <Container style={{backgroundColor:'#00AFFF'}} >
                        <View style={{flex: 1, flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}} >
                        <View style={{flex: 3,alignItems: 'center',justifyContent: 'flex-end'}}>
                        <Image
                                  style={{width: 100, height: 100}}
                                  source={{uri: 'https://imanity.herokuapp.com/images/prj57-512x512.png'}}
                                />
                        </View>
                        <View style={{flex: 6,alignItems: 'center',width:350,justifyContent: 'flex-start'}}>
                          <Item >
                            <Input placeholder="Name" ref="Name" style={{color:'#fff'}} returnKeyType="next"  onSubmitEditing={() =>{ this.refs.Username._root.focus();}} onChangeText={(name) => this.setState({name})} />
                          </Item>
                          <Item >
                            <Input placeholder="Username" ref="Username" style={{color:'#fff'}} returnKeyType="next"  onSubmitEditing={() =>{ this.refs.Email._root.focus();}} onChangeText={(username) => this.setState({username})} />
                          </Item>
                          <Item >
                            <Input placeholder="Email" ref="Email" style={{color:'#fff'}} returnKeyType="next"  onSubmitEditing={() =>{ this.refs.Password._root.focus();}} onChangeText={(email) => this.setState({email})} />
                          </Item>
                          <Item >
                            <Input secureTextEntry={true} placeholder="Password" style={{color:'#fff'}} returnKeyType="next" ref='Password' onSubmitEditing={() =>{ this.refs.CPassword._root.focus();}} onChangeText={(password) => this.setState({password})}/>
                          </Item>
                          <Item >
                            <Input secureTextEntry={true} placeholder="Conform Password" style={{color:'#fff'}} returnKeyType="next" ref='CPassword' onChangeText={(cpassword) => this.setState({cpassword})}/>
                          </Item>
                            <Button rounded style={{marginTop:10}} block  onPress={this.Signup.bind(this)}>
                            <Text>Sign Up</Text>
                            </Button>

                            <TouchableOpacity style={{marginTop:20}} onPress={()=>{this.setState({pagelog:true});}}>
                            <Text>Sign In?</Text>
                            </TouchableOpacity>

                        </View>
                        </View>

                    </Container>
                    </Root>);
            }
        }
    }
}

export default Login;
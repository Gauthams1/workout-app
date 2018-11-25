import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { Header,  Left, Body, Right, Button, Title, Content, Icon, Thumbnail,H1, H3, H2, List, ListItem,Switch } from 'native-base';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }

componentDidMount(){
}
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
                            <Calendar
                              onDayPress={this.onDayPress}
                              style={styles.calendar}
                              hideExtraDays
                              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
                            />
                    </View>
                </View>
      
    );
  }

  loadItems(day) {
    console.log(day.timestamp)
    setTimeout(() => {
       this.state.items=[]
      for (let i = -100; i < 200; i++) {
         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }

      }
      this.state.result.forEach(item=>{
        console.log(this.timeToString(new Date(item._id.year,item._id.month,item._id.day)))
        this.state.items[this.timeToString(new Date(item._id.year,item._id.month-1,item._id.day))].push({
              name: `${item._id.year}-${item._id.month}-${item._id.day} ` ,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
      })
      console.log(this.state.items)
     const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

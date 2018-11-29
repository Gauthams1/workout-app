import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import { Header,  Left, Body, Right, Button, Title, Content, Icon, Thumbnail,H1, H3, H2, List, ListItem,Switch } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {'2018-11-11':[ 
                  {key: 'Running 50 miles',status:false,time:"09:00 Am"},
                  {key: 'Coding for 20 hrs',status:true,time:"09:00 Pm"}
                  ],
                  '2018-11-22':[ 
                  {key: 'Running for 20 miles',status:false,time:"09:00 Am"},
                  {key: 'Cleaning the Code Repo',status:true,time:"09:00 Pm"}
                  ],
                  '2018-11-04':[ 
                  {key: 'Running for 20 miles',status:false,time:"09:00 Am"},
                  {key: 'Cleaning the Code Repo',status:true,time:"09:00 Pm"}
                  ],
                  '2018-11-23':[ 
                  {key: 'Running 20 miles',status:false,time:"09:00 Am"},
                  {key: 'Fasting for 24 hrs',status:true,time:"09:00 Pm"}
                  ]
               },
            current:'2018-11-26',   
            refresh: false,
            day:5
    };
  }

componentDidMount(){
}
  render() {
    return (

       <View style={{flex: 1,backgroundColor:'#fff'}}>
                    <View style={{flex: 4,backgroundColor:'#fff'}}>
                            <CalendarList
                              // Callback which gets executed when visible months change in scroll view. Default = undefined
                              onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                              // Max amount of months allowed to scroll to the past. Default = 50
                              pastScrollRange={50}
                              // Max amount of months allowed to scroll to the future. Default = 50
                              futureScrollRange={50}
                              // Enable or disable scrolling of calendar list
                              scrollEnabled={true}
                              // Enable or disable vertical scroll indicator. Default = false
                              onDayPress={(day) => {this.setState({current:day.dateString})}}
                              showScrollIndicator={true}
                              markedDates={
                                  {'2018-11-11': {textColor: 'aqua'},
                                   '2018-11-22': {startingDay: true, color: 'aqua'},
                                   '2018-11-23': {selected: true, endingDay: true, color: 'aqua',},
                                   '2018-11-04': {disabled: true, startingDay: true, color: 'aqua', endingDay: true}
                                  }}
                                // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                              markingType={'period'}
                            />
                    </View>
                    <View style={{flex:4,marginTop:10}}>
                        <FlatList data={this.state.product[this.state.current]} 
                          renderItem={({item})=> <ListItem thumbnail style={{}}>
                          <Left>
                          <Text style={{fontFamily:'Montserrat-Medium'}}>{item.time}</Text>
                          </Left>
                          <Body >
                          <Text style={{fontFamily:'Montserrat-Medium'}}>{item.key}</Text>
                          <Text note>{item.key}</Text>
                          </Body>
                          <Right  style={{width:60,alignItems: 'center',justifyContent: 'center',backgroundColor:item.status?"#4dd0e1":"fff"}}>
                          {item.status && <Ionicons name='ios-checkmark' size={50} style={{}} />}
                          </Right>
                          </ListItem>}/>
                    </View>
                </View>
      
    );
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
  },
    calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
});

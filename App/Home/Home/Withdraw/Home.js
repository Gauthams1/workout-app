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
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'
import Pending_1 from './Pending';
import Missed_1 from './Missed';
import Progress_1 from './Progress';
const screenWidth = Dimensions.get('window').width
const data = {
  labels: [1,2,3,4,5,6,7,8,9,10],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43, 20, 45, 28, 80 ]
  }]
}
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
class App extends Component < Props > {
    constructor() {
        super();
        this.state = {
            product: [   ],
            refresh: false,
        };
    }
          

    render() {
      console.log(this.props.screenProps.rootNavigation);
        return (
                <View style={{flex: 1,backgroundColor:'#fff'}}>
                   
                    <View style={{flex: 3,backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
                    <LineChart
                      data={data}
                      width={screenWidth}
                      height={220}
                      chartConfig={chartConfig}
                    />
                    </View>
                    <View style={{flex: 6,backgroundColor:'#fff', flexDirection: 'row',alignSelf:"center"}}>
                      <Rootnavigate/>
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

const Rootnavigate=createAppContainer(createMaterialTopTabNavigator({
    Missed: {screen:Missed_1},
    Pending: {screen:Pending_1},
    Progress: {screen:Progress_1},
},{
  shifting:true,
  labeled:false,
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName,iconSize;
        if (routeName === 'Home') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          iconSize=20;
        } else if (routeName === 'Calender') {
          iconName = `ios-calendar${focused ? '' : ''}`;
          iconSize=20;
        }else if (routeName === 'Settings') {
          iconName = `ios-stats${focused ? '' : ''}`;
          iconSize=20;
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
  initialRouteName: 'Pending',
  activeColor: '#3e2465',
  inactiveColor: '#f0edf6',
  barStyle: { backgroundColor: '#ffffff' },
}));



const mapStateToProps = (state) => {
    // console.log("\n\n\n\n\n\n ----------");
    // console.log(Object.keys(state.reducer1));
    return {
        reducer1: state.reducer1
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        adduser: (user) => {
            dispatch({
                type: "adduser",
                payload: user
            })
        }
    };
}
const test = connect(mapStateToProps, mapDispatchToProps)(App);
export default test;
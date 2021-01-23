import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import CalenderScreen from './screens/CalenderScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import PasswordEncryptor from './screens/PasswordEncryptor';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions:{
      tabBarIcon:<Image source = {require('./assets/scheduling.png')} style = {{width:30, height:30, borderWidth:2, borderRadius:15}}/>,
      tabBarLabel: 'Schedule',
    }
  },
  Calender: {
    screen: CalenderScreen ,
    navigationOptions:{
      tabBarIcon:<Image source = {require('./assets/calender.webp')} style = {{width:30, height:30, borderWidth:2, borderRadius:15}}/>,
      tabBarLabel:'Calender',
    }
  },
  PasswordEncryptor:{
    screen:PasswordEncryptor,
  }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

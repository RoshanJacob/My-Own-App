// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList} from 'react-native-calendars';
import { Icon, Header } from 'react-native-elements';

export default class CalenderScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      isPressed:false,
      day:"",
      markedDates:{}
    }
  }
  getSelectedDay = (day) =>{
    var markedDates = {};
    markedDates[day] = {selected:true, selectedColor:'blue', selectedTextColor:'white'}
    var selectedDay = moment(day);
    selectedDay.format('DD.MM.YYYY');
    this.setState({
      day:selectedDay,
      markedDates:markedDates,
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Calender</Text> */}
        {/* <Header
        leftComponent = {<Icon name = 'calendar' type = 'font-awesome' color = 'white'/>}
        centerComponent = {{text:'Calendar'}}
        /> */}
        <Calendar
            minDate = {'2017-1-13'}
            maxDate = {'2050-1-13'}
            onPressArrowLeft = {subtractMonth => subtractMonth()}
            onPressArrowRight = {addMonth => addMonth()}
            onDayPress = {(day)=>{Alert.alert('Selected' + day)}}
            // renderArrow = {(direction)=}
            renderArrow={(direction) => {
              if (direction == "left"){
                return (
                    <Icon name="keyboard-arrow-left" type="MaterialIcons" color = '0bb0f5' />
                );
              }
              if (direction == "right"){
                return (
                    <Icon name="keyboard-arrow-right" type="MaterialIcons" />
                );
              }
            }}
            markedDates = {{
              '2017-05-3':{selected:true, marked:true, selectedColor:'blue'}
            }}
            enableSwipeMonths = {true}
            style = {{borderWidth:2, borderRadius:12, height:500, width:600}}

            theme = {{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              disabledArrowColor: '#d9e1e8',
              indicatorColor: 'blue',
            }}
        />
      </View>
    );
  }
}

{/*
  Aidan Sommerfeld
  200362730

  WeeklyScreen.js

  Shows the weekly tasks, and percentages complete for each day in the current calander week. 

 */}

import * as React from 'react';
import { useTheme } from '@react-navigation/native';

import { useState, useEffect } from 'react';
import { Button, View, Text, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import Line from '../Line';
import Task from '../tasks/Task';

import TaskCreator from '../tasks/TaskCreator';
import { getTasksBefore } from '../../actions/actions';
import { useSelector, useDispatch } from "react-redux";


import { VibrationContext } from '../../contexts/VibrationContext';

import ProgressBar from '../ProgressBar';

{/* Returns the theme for the background based on the time */}
function GetColors(time){
  const { colors, dark } = useTheme();
  if(time == 'morning'){
      return [colors.background, colors.morningA, colors.morningB]
  }
  else if (time == 'evening')
  {
    return [colors.background, colors.background, colors.evening]
  }
  else if(time == 'night')
  {
    return [colors.background, colors.background, colors.night]
  }
  else if (time == 'afternoon')
  {
    return [colors.background, colors.afternoonA, colors.afternoonB]
  }
}

{/* Returns the time string used for the theme colors and the greeting */}
function GetTime(){
  var today = new Date(); 
  var hour = today.getHours();
  if(hour < 12)
    return 'morning';
  else if(hour < 18)
    return 'afternoon';
  else if (hour < 21)
    return 'evening';
  else
    return 'night';
}

{/* Returns the start of day with the given date object */}
function getStartOfDay(day){
  let date = new Date();

  let difference = day - date.getDay();
  date.setUTCDate(date.getDate() + difference)
  date.setUTCHours(0,0,0,0);
  return date;
}

{/* Returns the end of day with the given date object */}
function getEndOfDay(day){
  let date = new Date();
  
  let difference = day - date.getDay();
  date.setUTCDate(date.getDate() + difference)
  date.setUTCHours(23, 59, 59, 999);
  return date;
}

{/* Returns the daily percent complete for the given day */}
function getDailyPercent(day, tasks){
  let daily = tasks.filter((item) => Date.parse(item.deadline) >= getStartOfDay(day) && Date.parse(item.deadline) <= getEndOfDay(day));
  let dailyListLength = Object.keys(daily).length;

  let count = daily.filter((item) =>
       item.isChecked === true).length;
  
  if(dailyListLength === 0)
    return 1;
  else
    return count / dailyListLength;
}

{/* Returns the daily percent, start of day, end of day, and the day of the month for each day of the current week */}
function getWeeklyData(tasks){
  let percents = [];
  for(let i = 0; i < 7; i++){
    percents = percents.concat({
      value: getStartOfDay(i).getDate(),
      startDate: getStartOfDay(i),
      endDate: getEndOfDay(i),
      percent: getDailyPercent(i, tasks)
    });
  }
  return percents;
}


{/* Displays the weekly screen */}
export default function WeeklyScreen({ navigation }) {
  const { colors } = useTheme();
  const [dailyPercent, setDailyPercent] = useState(0.0);
  const [greetingTime, setGreetingTime] = useState(GetTime());
  const [modalVisible, setModalVisible] = useState(false);
  const [taskOptionsVisible, setTaskOptionsVisible] = useState(false);
  const { vibration, useVibration } = React.useContext(VibrationContext);


  let firstDay = getStartOfDay(0);
  let lastDay = getEndOfDay(6);
  let dateString = new Date();

  const prev = useSelector((state) => state.tasksReducer.previousDailyReminderProgress);
  console.log(prev)

  const taskList = useSelector((state) => state.tasksReducer.taskList);
  const dayList = useSelector((state) => state.tasksReducer.taskList.filter((item) => 
    Date.parse(item.deadline) >= firstDay && Date.parse(item.deadline) <= lastDay
  ))

  const week = getWeeklyData(dayList);

  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
  });

  if(!fontsLoaded)
    return(<AppLoading/>)
  else
  return (
  <LinearGradient
    colors={GetColors(greetingTime)}
    style={{flex:1}}>

    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
    }}>
      <TaskCreator setModalVisible={setModalVisible} modalVisible={modalVisible}/>
    </Modal>

    <ScrollView style={{flex:1, alignContent:'center'}}>
      <View style={{flex:1, alignContent:'center'}}>
        <Text style={[styles.greeting, {color:colors.text, textAlign:'center', fontFamily: 'Questrial_400Regular',}]}>Good {greetingTime}.</Text>
        <Text style={{color:colors.text, textAlign:'center', fontFamily: 'Questrial_400Regular', fontSize:25, marginBottom:25}}>{dateString.toDateString()}</Text>
        <View style={[styles.inline, {marginBottom:65, paddingLeft:15, paddingRight:15}]}>
          <ProgressBar navigation={navigation}
                       day={{value:week[0].value, 
                             startDate: week[0].startDate, 
                             endDate: week[0].endDate}} 
                       percent={week[0].percent} 
                       style={{borderTopLeftRadius:50, borderBottomLeftRadius:50}}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[1].value, 
                             startDate: week[1].startDate, 
                             endDate: week[1].endDate}} 
                       percent={week[1].percent}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[2].value, 
                             startDate: week[2].startDate, 
                             endDate: week[2].endDate}} 
                       percent={week[2].percent}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[3].value, 
                             startDate: week[3].startDate, 
                             endDate: week[3].endDate}} 
                       percent={week[3].percent}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[4].value, 
                             startDate: week[4].startDate, 
                             endDate: week[4].endDate}} 
                       percent={week[4].percent}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[5].value, 
                             startDate: week[5].startDate, 
                             endDate: week[5].endDate}} 
                       percent={week[5].percent}/>
          <ProgressBar navigation={navigation}
                       day={{value:week[6].value, 
                             startDate: week[6].startDate, 
                             endDate: week[6].endDate}} 
                       percent={week[6].percent}
                       style={{borderTopRightRadius:50, borderBottomRightRadius:50}}/>
        </View>
      </View>

      <Line/>
      
      <View>
        <View style={styles.inline}>
          <Text style={{color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15, flexGrow:1}} >Tasks</Text>

          <Pressable
            onPress={() => {
              if(vibration)
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setTaskOptionsVisible(!taskOptionsVisible)}}
          >
          <View>
              <AntDesign name="edit" size={24} color={colors.text} style={{marginRight:20}}/>
          </View>
          </Pressable>
          <Pressable
            onPress={() => {
              if(vibration)
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setModalVisible(true)}}
          >
          <View>
              <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
          </View>
          </Pressable>
        </View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => ( !item.isChecked ?
          <Task
            title={item.title}
            id={item.id}
            selected={item.selected}
            editing={taskOptionsVisible}
          /> : null
        )}
        />
      </View>

      <Text style={{color:colors.border, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15, flexGrow:1}} >Completed</Text>

      <FlatList
          data={taskList}
          renderItem={({ item }) => ( item.isChecked ?
          <Task
            title={item.title}
            id={item.id}
            selected={item.isChecked}
            editing={taskOptionsVisible}
          /> : null
        )}
        />

    </ScrollView>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  greeting:{
    fontSize: 40,
    padding: 10,
    paddingTop: 30,
  },
  inline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width:'100%'
  },

});

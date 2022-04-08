import * as React from 'react';
import { useState, useEffect } from 'react';

import { Button, View, Text, ScrollView, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ProgressBar } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import AppLoading from 'expo-app-loading';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Line from './Line';
import Task from './Task';

import TaskCreator from './TaskCreator';
import DailyReminderWidget from './DailyReminderWidget'

import { getTasksBefore, createDailyProgress } from '../actions/task';
import { useSelector, useDispatch } from "react-redux";

import * as Haptics from 'expo-haptics';
import { VibrationContext } from '../contexts/VibrationContext';



export default function HistoryScreen({ navigation, route }) {
  const { colors } = useTheme();
  const [dailyPercent, setDailyPercent] = useState(0.0);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskOptionsVisible, setTaskOptionsVisible] = useState(false);

  const dailyTaskList = useSelector((state) => state.tasksReducer.taskList.filter((item) => Date.parse(item.deadline) > route.params.day.startDate &&
                                                                                              Date.parse(item.deadline) < route.params.day.endDate ));

  let percent = 1;
  if(dailyTaskList.length > 0)
    percent = dailyTaskList.filter((item)=> item.isChecked == true).length/dailyTaskList.length;

  console.log(dailyTaskList);
  
  const { vibration, useVibration } = React.useContext(VibrationContext);
  


  return (
  <View
    style={{backgroundColor: colors.background, flex:1}}>

    <ScrollView style={{flex:1, alignContent:'center'}}>
      <View style={{flex:1, alignContent:'center'}}>
        <Text style={{marginTop: 25, color:colors.text, textAlign:'center', fontFamily: 'Questrial_400Regular', fontSize:25, marginBottom:25}}>
          {route.params.day.startDate.toDateString()}
        </Text>
        <View style={styles.progressMargin}>
          <ProgressBar style={[styles.progress, styles.topProgress]} progress={percent} color={colors.primary} />
        </View>
      </View>
      
      
      <View>
        <View style={styles.inline}>
          <Text style={{color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15, flexGrow:1}} >Tasks</Text>

          <Pressable
            onPress={() => {
              if(vibration)
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setTaskOptionsVisible(!taskOptionsVisible);
              }}
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
          data={dailyTaskList}
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
          data={dailyTaskList}
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
  </View>
  );
}

const styles = StyleSheet.create({
  inline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width:'100%'
  },
  progress:{
    height:15,
    borderRadius:50,
  },
  progressMargin:{
    flex:1,
    marginLeft:25,
    marginRight:25,
  },
  topProgress:{
    marginBottom:30,
  }
});

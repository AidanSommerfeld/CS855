import * as React from 'react';
import { useState, useEffect } from 'react';

import { Button, View, Text, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ProgressBar } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import AppLoading from 'expo-app-loading';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Line from '../Line';
import Task from '../tasks/Task';

import TaskCreator from '../tasks/TaskCreator';
import { getTasksBefore, createDailyProgress } from '../../actions/actions';
import { useSelector, useDispatch } from "react-redux";

function SetIndividualPercent(list, setter){
  const total = Object.keys(list).length;
  const complete = list.filter((item) => item.isChecked === true).length;

  if(total == 0)
    setter(-1);
  else
    setter(complete/total);
}

function SetAllPercents(reminders, setMealPercent, setWaterPercent, setMedsPercent, setExercisePercent){
  if(Object.keys(reminders).length == 0)
    return;
  SetIndividualPercent(reminders.meals, setMealPercent);
  SetIndividualPercent(reminders.water, setWaterPercent);
  SetIndividualPercent(reminders.meds, setMedsPercent);
  SetIndividualPercent(reminders.exercise, setExercisePercent);
}

export default function DailyReminderWidget(){
  const { colors } = useTheme();

  const [mealPercent, setMealPercent] = useState(-1)
  const [waterPercent, setWaterPercent] = useState(-1)
  const [medsPercent, setMedsPercent] = useState(-1)
  const [exercisePercent, setExercisePercent] = useState(-1)

  const dailyPercent = 0.9;

  const reminderProgress = useSelector((state => state.tasksReducer.dailyReminderProgress))
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    today.setUTCHours(23,59,59,999);
    dispatch(createDailyProgress(today.toISOString()))
    SetAllPercents(reminderProgress, setMealPercent, setWaterPercent, setMedsPercent, setExercisePercent);
  });

  return(
      <View style={styles.reminders}>
        <Text style={{color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}} >Reminders</Text>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="food-apple-outline" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={mealPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="water-outline" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={waterPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="pill" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={medsPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="run" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={exercisePercent} color={colors.primary} />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  reminderLine:{
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  reminders:{
    marginBottom: 15
  }
});
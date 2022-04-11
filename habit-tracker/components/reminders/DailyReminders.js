import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";

import Reminder from './Reminder';

export default function DailyReminders() {
  const { colors } = useTheme();
  const reminderList = useSelector((state) => state.tasksReducer.dailyReminderProgress);

  const state = useSelector((state)=> state.tasksReducer);
  console.log(state)
  return (
    <ScrollView style={{backgroundColor:colors.background}}>
      <View style={styles.inline}>
        <MaterialCommunityIcons style={{marginLeft:15}} name="food-apple-outline" size={24} color={colors.text} />
        <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Meals</Text>
      </View>

      <FlatList
        data={reminderList.meals}
        renderItem={({ item }) => (
        <Reminder
          title={item.title}
          id={item.id}
          selected={item.isChecked}
          category={item.category}
        /> 
      )}
      />

      <View style={styles.inline}>
        <MaterialCommunityIcons style={{marginLeft:15}} name="water-outline" size={24} color={colors.text} />
        <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Water</Text>
      </View>

      <FlatList
        data={reminderList.water}
        renderItem={({ item }) => (
        <Reminder
          title={item.title}
          id={item.id}
          selected={item.isChecked}
          category={item.category}
        />
      )}
      />

      <View style={styles.inline}>
        <MaterialCommunityIcons style={{marginLeft:15}} name="pill" size={24} color={colors.text} />
        <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Medication</Text>
      </View>

      <FlatList
        data={reminderList.meds}
        renderItem={({ item }) => (
        <Reminder
          title={item.title}
          id={item.id}
          selected={item.isChecked}
          category={item.category}
        />
      )}
      />
      
      <View style={styles.inline}>
        <MaterialCommunityIcons style={{marginLeft:15}} name="run" size={24} color={colors.text} />
        <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Exercise</Text>
      </View>

      <FlatList
        data={reminderList.exercise}
        renderItem={({ item }) => (
        <Reminder
          title={item.title}
          id={item.id}
          selected={item.isChecked}
          category={item.category}
        /> 
      )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    flexGrow:1,
    margin:25,
  },
  inline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%'
  },
});
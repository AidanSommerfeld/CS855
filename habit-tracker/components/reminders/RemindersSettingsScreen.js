{/*
  Aidan Sommerfeld
  200362730

  RemindersSettingsScreen.js

  Shows the page where the user can manage their daily reminders. 
  This includes the time the reminders are for, and the categories of the reminders. 

 */}

import React from 'react';
import { useState } from 'react'
import { ScrollView, View, Text, Pressable, StyleSheet, FlatList, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { getTasksBefore } from '../../actions/actions';
import { useSelector, useDispatch } from "react-redux";

import ReminderSetting from './ReminderSetting';
import ReminderCreator from './ReminderCreator';


{/* Displays the reminder setting screen */}
export default function RemindersSettingsScreen() {
  const { colors } = useTheme();
  const reminderList = useSelector((state) => state.tasksReducer.reminderList);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [mealOptionsVisible, setMealOptionsVisible] = useState(false);
  const [waterOptionsVisible, setWaterOptionsVisible] = useState(false);
  const [medsOptionsVisible, setMedsOptionsVisible] = useState(false);
  const [exerciseOptionsVisible, setExerciseOptionsVisible] = useState(false);

  const [reminderType, setReminderType] = useState("Meal");

  {/* Open the create reminder modal */}
  const openModal = (type) => {
    setReminderType(type)
    setModalVisible(true);
  }

  return (
      <ScrollView>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <ReminderCreator setModalVisible={setModalVisible} modalVisible={modalVisible} type={reminderType}/>
        </Modal>


        <View style={styles.inline}>
         <MaterialCommunityIcons style={{marginLeft:15}} name="food-apple-outline" size={24} color={colors.text} />
          <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Meals</Text>
          <Pressable
            onPress={() => setMealOptionsVisible(!mealOptionsVisible)}
          >
            <View>
                <AntDesign name="edit" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
          <Pressable
            onPress={() => openModal("Meal")}
          >
            <View>
                <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
        </View>

        <FlatList
          data={reminderList}
          renderItem={({ item }) => ( item.category == "Meal" ?
          <ReminderSetting
            title={item.title}
            id={item.id}
            editing={mealOptionsVisible}
            time={item.time}
          /> : null
        )}
        />

        <View style={styles.inline}>
          <MaterialCommunityIcons style={{marginLeft:15}} name="water-outline" size={24} color={colors.text} />
          <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Water</Text>

          <Pressable
            onPress={() => setWaterOptionsVisible(!waterOptionsVisible)}
          >
            <View>
                <AntDesign name="edit" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
          <Pressable
            onPress={() => openModal("Water")}
          >
            <View>
                <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
        </View>

        <FlatList
          data={reminderList}
          renderItem={({ item }) => ( item.category == "Water" ?
          <ReminderSetting
            title={item.title}
            id={item.id}
            editing={waterOptionsVisible}
            time={item.time}
          /> : null
        )}
        />

        <View style={styles.inline}>
          <MaterialCommunityIcons style={{marginLeft:15}} name="pill" size={24} color={colors.text} />
          <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Medication</Text>

          <Pressable
            onPress={() => setMedsOptionsVisible(!medsOptionsVisible)}
          >
            <View>
                <AntDesign name="edit" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>

          <Pressable
            onPress={() => openModal("Medication")}
          >
            <View>
                <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
        </View>

        <FlatList
          data={reminderList}
          renderItem={({ item }) => ( item.category == "Medication" ?
          <ReminderSetting
            title={item.title}
            id={item.id}
            editing={medsOptionsVisible}
            time={item.time}
          /> : null
        )}
        />
        
        <View style={styles.inline}>
          <MaterialCommunityIcons style={{marginLeft:15}} name="run" size={24} color={colors.text} />
          <Text style={[styles.header, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}]}>Exercise</Text>

          <Pressable
            onPress={() => setExerciseOptionsVisible(!exerciseOptionsVisible)}
          >
            <View>
                <AntDesign name="edit" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>

          <Pressable
            onPress={() => openModal("Exercise")}
          >
            <View>
                <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
            </View>
          </Pressable>
        </View>

        <FlatList
          data={reminderList}
          renderItem={({ item }) => ( item.category == "Exercise" ?
          <ReminderSetting
            title={item.title}
            id={item.id}
            editing={exerciseOptionsVisible}
            time={item.time}
          /> : null
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

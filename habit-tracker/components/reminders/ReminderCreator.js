import * as React from 'react';
import { useState } from 'react'
import { Button, View, Text, TextInput, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { AntDesign } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { createReminder, updateReminder, deleteReminder } from '/actions/task'
import { useSelector, useDispatch } from "react-redux";

import DateTimePicker from '@react-native-community/datetimepicker';

import moment from "moment";


export default function ReminderCreator({setModalVisible, modalVisible, type}){
  const { colors, isDark } = useTheme();

  const [title, onChangeTitle] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  let today = new Date();
  const [date, setDate] = useState(today);

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate;
    setShow(false);
    if(currentDate != null)
    {
      currentDate.setSeconds(0,0);
      setDate(currentDate);
    }
  };

  const Submit = (category) => {
    if( title !== "")
    {
      dispatch(createReminder({title:title, time:date.toISOString(), category:category}));
      setModalVisible(!modalVisible);
    }
    else
    {
      Alert.alert( type + " name cannot be empty");
    }
  }

  return(
    <View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor:colors.card}]}>
        <View style={styles.inline}>
          <Text style={[styles.taskTitle,{color:colors.text}]}>Create New {type}</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="closecircleo" size={24} color={colors.text} />
          </Pressable>
        </View>

        <TextInput
          style={[styles.input, {color:colors.text, backgroundColor:colors.border}]}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Title"
          placeholderTextColor={colors.background}
          autoFocus={true}
        />

        <View style={[styles.inline, {justifyContent:'center', marginBottom:10}]}>
          <Pressable style={[styles.button, styles.buttonClose, {backgroundColor:colors.primary, marginRight:12}]} onPress={() => setShow(true)}>
            <AntDesign name="clockcircleo" size={24} color={colors.background} />
          </Pressable>
          <Text style={{color:colors.text}}> At {moment(date).format('h:mm A')}</Text>
        </View>

        {show && <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          colorAccent={colors.primary}
          is24Hour={false}
          onChange={onChange}
        />}

        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor:colors.primary}]}
          onPress={() => {
              Submit(type);
            }
          }
        >
          <Text style={{fontFamily:'Questrial_400Regular', color:colors.card}}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'75%'
  },
  taskTitle:{
    fontSize:24,
    fontFamily:'Questrial_400Regular',
  }
});
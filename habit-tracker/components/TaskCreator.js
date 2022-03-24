import * as React from 'react';
import { useState } from 'react'
import { Button, View, Text, TextInput, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { AntDesign } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { createTask, updateTask, deleteTask } from '../actions/task'
import { useSelector, useDispatch } from "react-redux";

import DateTimePicker from '@react-native-community/datetimepicker';


export default function TaskCreator({setModalVisible, modalVisible}){
  const { colors, isDark } = useTheme();

  const [title, onChangeTitle] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  let today = new Date();
  const [date, setDate] = useState(today);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    if(currentDate != null)
      setDate(currentDate);
  };

  const Submit = () => {
    if( title !== "")
    {
      dispatch(createTask({title:title, deadline:date.toISOString()}));
      setModalVisible(!modalVisible);
    }
    else
    {
      Alert.alert("Task name cannot be empty");
    }
  }

  return(
    <View style={styles.centeredView}>
      <View style={[styles.modalView, {backgroundColor:colors.card}]}>
        <View style={styles.inline}>
          <Text style={[styles.taskTitle,{color:colors.text}]}>Create New Task</Text>
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

        <View style={[styles.inline, {justifyContent:'center'}]}>
          <Pressable style={[styles.button, styles.buttonClose, {backgroundColor:colors.primary, marginRight:12}]} onPress={() => setShow(true)}>
            <AntDesign name="calendar" size={24} color={colors.background} />
          </Pressable>
          <Text style={{color:colors.text}}> Task deadline is {"\n"}{date.toDateString()}</Text>
        </View>

        {show && <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          colorAccent={colors.primary}
          is24Hour={true}
          onChange={onChange}
        />}

        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor:colors.primary}]}
          onPress={() => {
              Submit();
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
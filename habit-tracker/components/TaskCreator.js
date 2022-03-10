import * as React from 'react';
import { useState } from 'react'
import { Button, View, Text, TextInput, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { AntDesign } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { createTask, readTask, updateTask, deleteTask } from '../actions/task'
import { useSelector, useDispatch } from "react-redux";



export default function TaskCreator({setModalVisible, modalVisible}){
  const { colors } = useTheme();

  const [title, onChangeTitle] = useState('');

  const dispatch = useDispatch();

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
          style={[styles.input, {color:colors.text}]}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Title"
          placeholderTextColor={colors.border}
          autoFocus={true}
        />

        <Pressable
          style={[styles.button, styles.buttonClose, {backgroundColor:colors.primary}]}
          onPress={() => dispatch(createTask({title:title}))}
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
    width:'75%'
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
    marginTop: 22
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
    elevation: 5
  },
  taskTitle:{
    fontSize:24,
    fontFamily:'Questrial_400Regular',
  }
});
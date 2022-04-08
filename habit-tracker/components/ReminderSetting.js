import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Pressable, TextInput } from 'react-native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import {  updateReminderName, deleteReminder, renameTask } from '../actions/task'
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { getTasksBefore, updateReminderTime } from '../actions/task';

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

export default function ReminderSetting({title, id, editing, time}){
  
  const { colors } = useTheme();
  const dispatch = useDispatch();
  
  const [showDatePicker, setShowDatePicker] = useState(false);
  let today = new Date();
  const [date, setDate] = useState(today);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    if(currentDate != null)
      currentDate.setSeconds(0,0);
      dispatch(updateReminderTime({id:id, time: currentDate.toISOString()}))
      setDate(currentDate);
  };

  return(
  <View>
    {editing ?
    <View style={styles.inline}>
      <TextInput 
        style={[styles.textBox, {flexGrow:1}, {color:colors.text, borderColor: colors.text}]}
        onChangeText={(value)=>{
          console.log(value);
          dispatch(updateReminderName({id:id, title:value}));
        }}
        defaultValue={title}
        placeholderTextColor={colors.background}
      />
      <Text style={[styles.text, {color:colors.text}]}>At {moment(time).format('h:mm A')}</Text>
      {showDatePicker && <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        colorAccent={colors.primary}
        is24Hour={false}
        onChange={onChange}
      />}

      <Pressable 
        style={{marginRight:20}}
        onPress={() => setShowDatePicker(true)}  
      >
        <AntDesign name="clockcircleo" size={24} color={colors.text} />
      </Pressable>
      <Pressable
        style={{marginRight:20}}  
        onPress={()=>{
          dispatch(deleteReminder(id));
        }}
      >
        <AntDesign name="delete" size={24} color={colors.text}/>
      </Pressable>
    </View> 
    :
    <View style={styles.inline}>
      <Text style={[styles.text, {flexGrow:1, color:colors.text}]}>{title}</Text>
      <Text style={[styles.text, {color:colors.text}]}>At {moment(time).format('h:mm A')}</Text>
    </View>
    }
  </View>
  );
}

const styles = StyleSheet.create({
  textBox:{
    fontSize:18,
    fontFamily:'Questrial_400Regular',
    margin:12,
    marginLeft:16,
    marginBottom:11,
    borderBottomWidth:1,
  },
  text:{
    fontSize:18,
    fontFamily:'Questrial_400Regular',
    margin:13,
    marginLeft:16,
    marginBottom:12
  },
  inline:{
    flexDirection: "row",
    alignItems: "baseline",
    width:'100%'
  },
});

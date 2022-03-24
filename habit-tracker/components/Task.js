import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Pressable, TextInput } from 'react-native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import { createTask, updateTask, deleteTask, renameTask } from '../actions/task'
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export default function Task({title, id, selected, editing}){
  const [checked, setChecked] = useState(selected);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={styles.taskMargin}>
      <View>
        </View>
        {editing ?
          <View style={styles.inline}>
            <TextInput 
              style={[styles.textBox, {flexGrow:1}, checked ? {color:colors.border, borderColor:colors.border} : {color:colors.text, borderColor: colors.text}]}
              onChangeText={(value)=>{
                console.log(value);
                dispatch(renameTask({id:id, title:value}));
              }}
              defaultValue={title}
              placeholderTextColor={colors.background}
            />
            <Pressable
              style={{marginRight:20}}  
              onPress={()=>{
                dispatch(deleteTask(id));
              }}
            >
              <AntDesign name="delete" size={24} color={ checked ? colors.border : colors.text}/>
            </Pressable>
          </View> 
          :
          <View style={{flexGrow:1}}>
            <Checkbox.Item
              label={title}
              labelStyle={[styles.taskText, checked ? {color:colors.border} : {color:colors.text}]}
              status={checked ? 'checked' : 'unchecked'}
              uncheckedColor={colors.text}
              color={colors.border}
              onPress={() => {
                dispatch(updateTask({id:id, isChecked:!checked}));
                setChecked(!checked);
              }}
            />
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
  inline:{
    flexDirection: "row",
    alignItems: "baseline",
    width:'100%'
  },
  taskMargin:{
    flex:1,
    marginLeft: 5,
    marginBottom: 5,
  },
  taskText:{
    fontSize:18,
    fontFamily:'Questrial_400Regular'
  }
});
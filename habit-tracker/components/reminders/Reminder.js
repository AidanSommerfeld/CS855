{/*
  Aidan Sommerfeld
  200362730

  Reminders.js

  Reminder checkbox item for use in FlatLists

 */}

import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Pressable, TextInput } from 'react-native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import { updateReminder } from '../../actions/actions'
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

{/* Displays the reminder checkbox item */}
export default function Reminder({title, id, selected, category}){
  const [checked, setChecked] = useState(selected);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={styles.taskMargin}>
      <View>
        </View>
          <View style={{flexGrow:1}}>
            <Checkbox.Item
              label={title}
              labelStyle={[styles.taskText, checked ? {color:colors.border} : {color:colors.text}]}
              status={checked ? 'checked' : 'unchecked'}
              uncheckedColor={colors.text}
              color={colors.border}
              onPress={() => {
                dispatch(updateReminder({id: id, isChecked: !checked, category: category}));
                setChecked(!checked);
              }}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
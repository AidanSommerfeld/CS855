import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

export default function Task({title, id, selected}){
  const [checked, setChecked] = React.useState(false);
  const { colors } = useTheme();
  return (
    <View style={styles.taskMargin}>
      <View>
        <Checkbox.Item
          label={title}
          labelStyle={[styles.taskText, {color:colors.text}]}
          status={checked ? 'checked' : 'unchecked'}
          uncheckedColor={colors.text}
          color={colors.primary}
          onPress={() => {
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
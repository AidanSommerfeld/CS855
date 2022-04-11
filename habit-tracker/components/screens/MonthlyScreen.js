{/*
  Aidan Sommerfeld
  200362730

  MonthlyScreen.js

  Unfinished monthly screen. This would have shown all tasks for the given month. 

 */}

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';


export default function MonthlyScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:colors.primary}}>Monthly Tasks {'\n'} not yet implemented</Text>
    </View>
  );
}
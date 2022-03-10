import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

export default function ProgressBar({ percent, margin }){
  const { colors } = useTheme();
  return(
    <View style={styles.barContainer}>
        <LinearGradient
          colors={[colors.primary, colors.border]}
          start={[0, 0]} end={[1, 0]}
          locations={[percent, percent]}
          style={[styles.bar, {marginTop:margin, marginBottom:margin}]}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  bar:{
    flex:1,
    borderRadius:50,
    margin:25,
    height:18, 
  }, 
  barContainer:{
    flex:1, 
    width:'100%',
  },
});
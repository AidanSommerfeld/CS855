import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Alert, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import * as Haptics from 'expo-haptics';
import { VibrationContext } from '../contexts/VibrationContext';

export default function ProgressBar({ day, percent, style, navigation}){
  const { colors } = useTheme();
  const { vibration, useVibration } = React.useContext(VibrationContext);
  return(
    <View style={styles.barContainer}>
        <LinearGradient
          colors={[colors.primary, colors.border]}
          start={[0, 1]} end={[0, 0]}
          locations={[percent, percent]}
          style={[styles.bar, {borderColor:colors.background}, style]}
        >
        <Pressable
          style={{width:'100%', height: '100%', justifyContent:"center", alignItems:"center"}}
          onPress={()=> {
            if(vibration)
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            navigation.navigate('History', { day: day })
          }}
        >
          <Text style={[styles.textShadow, {color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 25}]}>{day.value}</Text>
        </Pressable>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  textShadow:{
    textShadowColor: '#000', 
    textShadowOffset: { width: 0, height: 0 }, 
    textShadowOpacity: 1,
    textShadowRadius: 5
  },
  bar:{
    flex:1,
    height:50, 
    borderRightWidth:1,
  }, 
  barContainer:{
    flex:1, 
    width:'100%',
  },
});
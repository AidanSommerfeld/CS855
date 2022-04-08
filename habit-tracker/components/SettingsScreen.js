import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, View, Text, Switch, StyleSheet, ScrollView, Pressable, Animated} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ThemeContext } from '../contexts/ThemeContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { VibrationContext } from '../contexts/VibrationContext';

import { Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import { useSelector, useDispatch } from "react-redux";
import { deleteAllData } from '../actions/task'

import * as Haptics from 'expo-haptics';

function ThemeSelector() {
  const { useDarkTheme, darkTheme } = React.useContext(ThemeContext);
  const { vibration, useVibration } = React.useContext(VibrationContext);
  const { colors } = useTheme();

  const dispatch = useDispatch();

  const ToggleTheme = () => {
    if(vibration) 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); 
    useDarkTheme(previousState => !previousState)};
  return (
    <View style={[styles.first, styles.item, styles.toggleItem, { backgroundColor:colors.card, borderBottomWidth:2, borderBottomColor:colors.border}]}>
      <Text style={[styles.title, {color:colors.text}]}>Use Dark Mode</Text>
      <Switch
        style={styles.switch}
        title="Switch Theme"
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={darkTheme ? colors.border : colors.primary}
        onValueChange={ToggleTheme}
        value={darkTheme}
      />
    </View>
  );
}

function NotificationSelector() {
  const { useNotifications, notifications } = React.useContext(NotificationContext);
  const { vibration, useVibration } = React.useContext(VibrationContext);
  const { colors } = useTheme();

  const ToggleNotifications = () => {
    if(vibration) 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    useNotifications(previousState => !previousState)};
  return (
    <View style={[styles.item, styles.toggleItem, { backgroundColor:colors.card, borderBottomWidth:2, borderBottomColor:colors.border}]}>
      <Text style={[styles.title, {color:colors.text}]}>Push Notifications</Text>
      <Switch
        style={styles.switch}
        title="Switch Theme"
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={notifications ? colors.border : colors.primary}
        onValueChange={ToggleNotifications}
        value={notifications}
      />
    </View>
  );
}

function VibrationSelector() {
  const { vibration, useVibration } = React.useContext(VibrationContext);
  const { colors } = useTheme();

  const ToggleVibration = () => {
    if(!vibration)
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      useVibration(previousState => !previousState)};
  return (
    <View style={[styles.item, styles.toggleItem, { backgroundColor:colors.card, borderBottomWidth:2, borderBottomColor:colors.border}]}>
      <Text style={[styles.title, {color:colors.text}]}>Use Vibration</Text>
      <Switch
        style={styles.switch}
        title="Switch Theme"
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={vibration ? colors.border : colors.primary}
        onValueChange={ToggleVibration}
        value={vibration}
      />
    </View>
  );
}

function DeleteOption(){
  var timer = useRef(new Animated.Value(0)).current;
  var timerId;
  const [percent, setPercent] = useState(0.0);
  const dispatch = useDispatch();

  const updateTimer = ({value}) =>{
    setPercent(value);
  };

  const startAnim = () => {
    setPercent(0);
    timerId = timer.addListener(updateTimer)
    Animated.timing(timer, {
    toValue: 1,
    duration: 5000, 
    useNativeDriver: false
    }).start(({ finished }) => {
      if(finished){
        dispatch(deleteAllData())
      }
    });
  };

  const endAnim = () => {
    setPercent(0);
    Animated.timing(timer).reset();
    timer.removeListener(timerId);
  }

  return(
      <Pressable
        onPressIn={startAnim}
        onPressOut={endAnim}
      >
      
      <Animated.View>
        <LinearGradient
          colors={['#700b0b', '#d40b0b']}
          start={[0, 0]} end={[1, 0]}
          locations={[percent, percent]}
          style={[styles.item, styles.last, styles.deleteItem]}
        >
          <Text style={[styles.title, {color:'white'}]}>Delete Data</Text>
        </LinearGradient>
        </Animated.View>
      </Pressable>
  );
}

export default function SettingsScreen() {
  const { colors } = useTheme();
  return(
    <ScrollView style={{marginTop:15}}>
      <ThemeSelector/>
      <NotificationSelector/>
      <VibrationSelector/>
      <DeleteOption/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginLeft:10,
    marginRight:10,
  },
  toggleItem: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent:'space-between'
  },
  deleteItem:{
    paddingTop: 20,
    paddingBottom:20,
    backgroundColor: 'red',
  },
  switch: {
    margin:10,
    padding: 10,
    paddingTop:2,
    paddingBottom:2,
  },
  title: {
    fontSize: 24,
    padding:10,
    paddingTop:2,
    paddingBottom:2,
  }, 
  first: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  last: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

});

import * as React from 'react';
import { useState } from 'react';

import { Button, View, Text, ScrollView, StyleSheet, FlatList, Pressable, Modal, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ProgressBar } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import AppLoading from 'expo-app-loading';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Line from './Line';
import Task from './Task';

import TaskCreator from './TaskCreator';
import { useSelector, useDispatch } from "react-redux";
 

const data = [
  { id: 1, title: 'Do dishes', isChecked: false },
  { id: 2, title: 'Do laundry', isChecked: false },
  { id: 3, title: 'Take out garbage', isChecked: false },
  { id: 4, title: 'Go shopping', isChecked: false },
];

function GetColors(time){
  const { colors, dark } = useTheme();
  if(time == 'morning'){
      return [colors.background, colors.morningA, colors.morningB]
  }
  else if (time == 'evening')
  {
    return [colors.background, colors.background, colors.evening]
  }
  else if(time == 'night')
  {
    return [colors.background, colors.background, colors.night]
  }
  else if (time == 'afternoon')
  {
    return [colors.background, colors.afternoonA, colors.afternoonB]
  }
}

function GetTime(){
  var today = new Date(); 
  var hour = today.getHours();
  if(hour < 12)
    return 'morning';
  else if(hour < 18)
    return 'afternoon';
  else if (hour < 21)
    return 'evening';
  else
    return 'night';
}

export default function DailyScreen({ navigation }) {
  const { colors } = useTheme();
  const [dailyPercent, setDailyPercent] = useState(0.5);
  const [time, setTime] = useState(GetTime());
  const [modalVisible, setModalVisible] = useState(false);
  
  const taskList = useSelector((state) => state.tasksReducer.taskList);

  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
  });

  if(!fontsLoaded)
    return(<AppLoading/>)
  else
  return (
  <LinearGradient
    colors={GetColors(time)}
    style={{flex:1}}>

    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
    }}>
      <TaskCreator setModalVisible={setModalVisible} modalVisible={modalVisible}/>
    </Modal>

    <ScrollView style={{flex:1, alignContent:'center'}}>
      <View style={{flex:1, alignContent:'center'}}>
        <Text style={[styles.greeting, {color:colors.text, textAlign:'center', fontFamily: 'Questrial_400Regular',}]}>Good {time}.</Text>
        <View style={styles.progressMargin}>
          <ProgressBar style={[styles.progress, styles.topProgress]} progress={dailyPercent} color={colors.primary} />
        </View>
      </View>
      
      <Line/>

      <View style={styles.reminders}>
        <Text style={{color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}} >Reminders</Text>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="food-apple-outline" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={dailyPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="water-outline" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={dailyPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="pill" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={dailyPercent} color={colors.primary} />
          </View>
        </View>

        <View style={styles.reminderLine}>
          <MaterialCommunityIcons name="run" size={24} color={colors.text} />
          <View style={styles.progressMargin}>
            <ProgressBar style={styles.progress} progress={dailyPercent} color={colors.primary} />
          </View>
        </View>
      </View>

      <Line/>
      
      <View>
        <View style={styles.inline}>
          <Text style={{color:colors.text, fontFamily: 'Questrial_400Regular', fontSize: 20, margin:15}} >Tasks</Text>
          <Pressable
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="pluscircleo" size={24} color={colors.text} style={{marginRight:20}}/>
          </Pressable>
        </View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => (
          <Task
            title={item.title}
            id={item.id}
            selected={item.selected}
          />
        )}
        />
      </View>
    </ScrollView>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  greeting:{
    fontSize: 40,
    padding: 10,
    paddingTop: 30,
  },
  reminders:{
    marginBottom:15,
  },
  inline:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width:'100%'
  },
  reminderLine:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width:'100%'
  },
  progress:{
    height:15,
    borderRadius:50,
  },
  progressMargin:{
    flex:1,
    marginLeft:25,
    marginRight:25,
  },
  topProgress:{
    marginBottom:30,
  }
});

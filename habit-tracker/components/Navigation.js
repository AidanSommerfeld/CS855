import * as React from 'react';
import { useState } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DailyScreen from '../components/DailyScreen';
import WeeklyScreen from '../components/WeeklyScreen';
import MonthlyScreen from '../components/MonthlyScreen';
import SettingsScreen from '../components/SettingsScreen';
import RemindersSettingsScreen from '../components/RemindersSettingsScreen';
import DailyReminders from '../components/DailyReminders';
import History from '../components/History';

import { LightTheme, DarkTheme } from '../styles/Themes';
import { useTheme } from '@react-navigation/native';

import { ThemeContext } from '../contexts/ThemeContext';
import { NotificationContext } from '../contexts/NotificationContext';
import { VibrationContext } from '../contexts/VibrationContext';


const Drawer = createDrawerNavigator();
function TasksScreen() {
  const { colors } = useTheme();
  return(
    <Drawer.Navigator screenOptions={{drawerType: 'slide', swipeEdgeWidth: 100, headerTintColor: colors.text}}>
      <Drawer.Screen name="Daily" component={DailyScreen} />
      <Drawer.Screen name="Weekly" component={WeeklyScreen} />
      <Drawer.Screen name="Monthly" component={MonthlyScreen} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TasksScreen} options={{ headerShown: false, tabBarIcon: ({ focused, color, size }) => (
          <Feather name="home" size={size} color={color} />
        )}} />
      <Tab.Screen name="Reminders" component={RemindersSettingsScreen} options ={{tabBarIcon: ({ focused, color, size }) => (
          <Feather name="check-square" size={size} color={color} />
        )}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options ={{tabBarIcon: ({ focused, color, size }) => (
          <Feather name="settings" size={size} color={color} />
        )}}/>
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
export default function NavigatonElements(){
  const [darkTheme, useDarkTheme] = useState(true);
  const [notifications, useNotifications] = useState(false);
  const [vibration, useVibration] = useState(true);

  const themeData = {darkTheme, useDarkTheme};
  const notificationData = {notifications, useNotifications};
  const vibrationData = {vibration, useVibration}

  const { colors } = useTheme();
  return (
    <NotificationContext.Provider value = {notificationData}>
      <VibrationContext.Provider value = {vibrationData}>
        <ThemeContext.Provider value={themeData}>
          <StatusBar barStyle={darkTheme ? 'light-content' : 'dark-content'}/>
          <NavigationContainer theme={darkTheme === true ? DarkTheme : LightTheme}>
            <RootStack.Navigator>
              <RootStack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
              <RootStack.Screen name="Daily Reminders" component={DailyReminders} options={{ presentation: 'transparentModal' }}/>
              <RootStack.Screen name="History" component={History} options={{ presentation: 'transparentModal' }}/>
            </RootStack.Navigator>
          </NavigationContainer>
        </ThemeContext.Provider>
      </VibrationContext.Provider>
    </NotificationContext.Provider>
  );
}



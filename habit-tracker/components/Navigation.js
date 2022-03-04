import * as React from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DailyScreen from '../components/DailyScreen'
import WeeklyScreen from '../components/WeeklyScreen'
import MonthlyScreen from '../components/MonthlyScreen'
import SettingsScreen from '../components/SettingsScreen'

import { LightTheme, DarkTheme } from '../styles/Themes'
import { useTheme } from '@react-navigation/native';


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
      <Tab.Screen name="Settings" component={SettingsScreen} options ={{tabBarIcon: ({ focused, color, size }) => (
          <Feather name="settings" size={size} color={color} />
        )}}/>
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
export default function NavigatonElements(){
  return (
      <NavigationContainer theme={DarkTheme}>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
          <RootStack.Screen name="Settings" component={SettingsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}



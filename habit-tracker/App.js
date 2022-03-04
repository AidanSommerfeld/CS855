import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { createDrawerNavigator } from '@react-navigation/drawer';


import DailyScreen from './components/DailyScreen'
import WeeklyScreen from './components/WeeklyScreen'
import MonthlyScreen from './components/MonthlyScreen'


const Drawer = createDrawerNavigator();


function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Daily" component={DailyScreen} />
        <Drawer.Screen name="Weekly" component={WeeklyScreen} />
        <Drawer.Screen name="Monthly" component={MonthlyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
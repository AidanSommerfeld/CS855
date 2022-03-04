import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import NavigatonElements from './components/Navigation'


function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigatonElements></NavigatonElements>
    </SafeAreaProvider>
  );
}
export default App;
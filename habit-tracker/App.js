import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { useFonts } from 'expo-font';

import NavigatonElements from './components/Navigation'

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <NavigatonElements></NavigatonElements>
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
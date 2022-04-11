{/*
  Aidan Sommerfeld
  200362730

  Habit Tracker - CS 855

  This application is for tracking tasks and reminders. It was created for CS 855 - Mobile Computing at the University of Regina.

 */}

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
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


{/* Initialize the redux store. This is used as the controller in the MVC design pattern */}
const store = configureStore();

{/* Sets the store as persistent to save and load data when the app closes */}
const persistor = persistStore(store);


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
            <NavigatonElements/>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
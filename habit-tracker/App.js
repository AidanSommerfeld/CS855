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

const store = configureStore();

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
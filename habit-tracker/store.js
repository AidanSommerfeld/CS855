{/*
  Aidan Sommerfeld
  200362730

  store.js

  Sets up the Redux Store for saving data and persisting.

 */}

import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

{/* Used to combine reducers, in this case there is only one */}
const rootReducer = combineReducers({
  tasksReducer: taskReducer
})

{/* Config for Redux Persist. Using AsyncStorage with the key 'root' */}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}


{/* Get the persisted reducer from the root reducer */}
const persistedReducer = persistReducer(persistConfig, rootReducer);

{/* Create the store from the persisted reducer */}
const configureStore = () => createStore(persistedReducer);

const store = configureStore();

export default configureStore;
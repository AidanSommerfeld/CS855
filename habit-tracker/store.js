import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  tasksReducer: taskReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => createStore(persistedReducer);

const store = configureStore();

export default configureStore;
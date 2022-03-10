import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
  tasksReducer: taskReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;
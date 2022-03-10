import {CREATE_TASK, DELETE_TASK} from './types';

export const createTask = (task) => ({
    type: CREATE_TASK, 
    title: task.title,
    isChecked: false
  }
)

export const deleteTask = (key) => ({
    type: DELETE_TASK, 
    key: key
  }
)
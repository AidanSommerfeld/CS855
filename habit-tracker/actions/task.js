import {CREATE_TASK, DELETE_TASK, UPDATE_TASK, RENAME_TASK, GET_TASKS_BEFORE} from './types';

export const createTask = (task) => ({
    type: CREATE_TASK, 
    title: task.title,
    isChecked: false,
    deadline: task.deadline
  }
)

export const deleteTask = (id) => ({
    type: DELETE_TASK, 
    id: id
  }
)

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  id: task.id,
  isChecked: task.isChecked
})

export const renameTask = (task) => ({
  type: RENAME_TASK,
  id: task.id,
  title: task.title,
})

export const getTasksBefore = (time) => ({
  type: GET_TASKS_BEFORE,
  deadline: time
})
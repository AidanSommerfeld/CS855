{/*
  Aidan Sommerfeld
  200362730

  actions.js

  Sets up the the actions for the redux reducer.

 */}

import {CREATE_TASK, DELETE_TASK, UPDATE_TASK, RENAME_TASK, GET_TASKS_BEFORE,
        CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER_NAME, UPDATE_REMINDER_TIME,
          CREATE_DAILY_PROGRESS, UPDATE_DAILY_PROGRESS, DELETE_ALL_DATA, SET_THEME, SET_VIBRATION} from './types';


{/* Sets up the create task action for the reducer */}
export const createTask = (task) => ({
    type: CREATE_TASK, 
    title: task.title,
    isChecked: false,
    deadline: task.deadline
  }
)

{/* Sets up the delete task action for the reducer */}
export const deleteTask = (id) => ({
    type: DELETE_TASK, 
    id: id
  }
)

{/* Sets up the update task action for the reducer, used for completing or unchecking a task */}
export const updateTask = (task) => ({
  type: UPDATE_TASK,
  id: task.id,
  isChecked: task.isChecked
})

{/* Sets up the rename task action for the reducer, used to rename the task */}
export const renameTask = (task) => ({
  type: RENAME_TASK,
  id: task.id,
  title: task.title,
})

{/* Sets up the getTasksBefore action for the reducer, this is used to get tasks before a given time */}
export const getTasksBefore = (time) => ({
  type: GET_TASKS_BEFORE,
  deadline: time
})


{/* Sets up the create reminder action for the reducer, this is used to create a new reminder */}
export const createReminder = (reminder) => ({
  type: CREATE_REMINDER,
  title: reminder.title,
  time: reminder.time,
  category: reminder.category
})

{/* Sets up the update reminder name action for the reducer, this is used to update a reminder title with a given id */}
export const updateReminderName = (reminder) => ({
  type: UPDATE_REMINDER_NAME, 
  id: reminder.id,
  title: reminder.title,

})

{/* Sets up the update reminder time for the reducer, this is used to update a reminder tiime with a given id */}
export const updateReminderTime = (reminder) => ({
  type: UPDATE_REMINDER_TIME, 
  id: reminder.id,
  time: reminder.time,
})

{/* Sets up the delete reminder action for the reducer, this is used to delete a reminder with a given id */}
export const deleteReminder = (id) => ({
  type: DELETE_REMINDER, 
  id: id,
})

{/* Sets up the create daily progress action for the reducer, this is used to create a refreshing daily reminder */}
export const createDailyProgress = (time) =>({
  type: CREATE_DAILY_PROGRESS,
  time: time,
})

{/* Sets up the update reminder action for the reducer, this is used to update a reminder title with a given id */}
export const updateReminder = (reminder) =>({
  type: UPDATE_DAILY_PROGRESS,
  category: reminder.category, 
  id: reminder.id,
  isChecked: reminder.isChecked
})

{/* Sets up the delete all data action for the reducer, this is used to clear all local storage */}
export const deleteAllData = () =>({
  type: DELETE_ALL_DATA,
})

{/* Sets up the set theme action for the reducer, this is used to persist the theme setting*/}
export const setTheme = (useDarkTheme) => ({
  type: SET_THEME,
  darkTheme: useDarkTheme
})

{/* Sets up the set vibration action for the reducer, this is used to persist the vibration setting*/}
export const setVibration = (useVibration) => ({
  type: SET_VIBRATION,
  vibration: useVibration
})

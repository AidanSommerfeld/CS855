import {CREATE_TASK, DELETE_TASK, UPDATE_TASK, RENAME_TASK, GET_TASKS_BEFORE,
        CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER_NAME, UPDATE_REMINDER_TIME,
          CREATE_DAILY_PROGRESS, UPDATE_DAILY_PROGRESS, DELETE_ALL_DATA, SET_THEME, SET_VIBRATION} from './types';

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

export const createReminder = (reminder) => ({
  type: CREATE_REMINDER,
  title: reminder.title,
  time: reminder.time,
  category: reminder.category
})

export const updateReminderName = (reminder) => ({
  type: UPDATE_REMINDER_NAME, 
  id: reminder.id,
  title: reminder.title,

})

export const updateReminderTime = (reminder) => ({
  type: UPDATE_REMINDER_TIME, 
  id: reminder.id,
  time: reminder.time,
})

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER, 
  id: id,
})

export const createDailyProgress = (time) =>({
  type: CREATE_DAILY_PROGRESS,
  time: time,
})

export const updateReminder = (reminder) =>({
  type: UPDATE_DAILY_PROGRESS,
  category: reminder.category, 
  id: reminder.id,
  isChecked: reminder.isChecked
})

export const deleteAllData = () =>({
  type: DELETE_ALL_DATA,
})

export const setTheme = (useDarkTheme) => ({
  type: SET_THEME,
  darkTheme: useDarkTheme
})

export const setVibration = (useVibration) => ({
  type: SET_VIBRATION,
  vibration: useVibration
})

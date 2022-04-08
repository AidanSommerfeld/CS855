import { CREATE_TASK, DELETE_TASK, UPDATE_TASK, RENAME_TASK, GET_TASKS_BEFORE,
         CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER_NAME, UPDATE_REMINDER_TIME, CREATE_DAILY_PROGRESS, UPDATE_DAILY_PROGRESS,
         DELETE_ALL_DATA} from '../actions/types';
import uuid from 'react-native-uuid';

const resetValues = {
  taskList: [],
  reminderList:[],
  dailyReminderProgress:{
    time:"",
    meals:[],
    water:[],
    meds:[],
    exercise:[],
  },
  previousDailyReminderProgress:[],
  remindersUpdated: true,
}

const taskState = {
  taskList: [],
  reminderList:[],
  dailyReminderProgress:{
    time:"",
    meals:[],
    water:[],
    meds:[],
    exercise:[],
  },
  previousDailyReminderProgress:[],
  remindersUpdated: true,
}

const taskReducer = (state = taskState, action) => {
  switch(action.type){
    case CREATE_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({
          id: uuid.v4(),
          title: action.title,
          isChecked: action.isChecked,
          deadline: action.deadline
      })};
    case DELETE_TASK:
      return {
        ...state, 
        taskList: state.taskList.filter((item) =>
        item.id !== action.id)
      };
    case UPDATE_TASK:
      return {...state, 
        taskList: state.taskList.map(item => item.id === action.id ? 
        {...item, isChecked: action.isChecked} :
        item
        )
      };
    case RENAME_TASK:
      return {...state, 
        taskList: state.taskList.map(item => item.id === action.id ? 
        {...item, title: action.title} :
        item
        )
      };
    case CREATE_REMINDER:
      return{...state,
        reminderList: state.reminderList.concat({
          id: uuid.v4(),
          title: action.title, 
          time: action.time, 
          category: action.category,
          isChecked: false
        }),
        remindersUpdated: true

        };
    case UPDATE_REMINDER_NAME:
      return {...state, 
        reminderList: state.reminderList.map(item => item.id === action.id ? 
        {...item, title: action.title} :
        item
        ), 
        remindersUpdated: true
      };
    case UPDATE_REMINDER_TIME:
      return {...state, 
        reminderList: state.reminderList.map(item => item.id === action.id ? 
        {...item, time: action.time} :
        item
        ), 
        remindersUpdated: true
      };
    case DELETE_REMINDER:
      return {
        ...state, 
        reminderList: state.reminderList.filter((item) =>
        item.id !== action.id), 
        remindersUpdated: true
      };
    case CREATE_DAILY_PROGRESS:
      if(state.remindersUpdated === true || Date.parse(action.time) > Date.parse(state.dailyReminderProgress.time))
        return {...state,
          dailyReminderProgress: {
            time: action.time, 
            meals: state.dailyReminderProgress.meals.concat(
              state.reminderList.filter((item) => item.category === "Meal" && 
                state.dailyReminderProgress.meals.filter((other) => other.id === item.id).length == 0
              )),
            water: state.dailyReminderProgress.water.concat(
              state.reminderList.filter((item) => item.category === "Water" && 
                state.dailyReminderProgress.water.filter((other) => other.id === item.id).length == 0
              )),
            meds: state.dailyReminderProgress.meds.concat(
              state.reminderList.filter((item) => item.category === "Medication" && 
                state.dailyReminderProgress.meds.filter((other) => other.id === item.id).length == 0
              )),
            exercise: state.dailyReminderProgress.exercise.concat(
              state.reminderList.filter((item) => item.category === "Exercise" && 
                state.dailyReminderProgress.exercise.filter((other) => other.id === item.id).length == 0
              )),
            }, 
          previousDailyReminderProgress: (Date.parse(action.time) > Date.parse(state.dailyReminderProgress.time) ? 
                                                        state.previousDailyReminderProgress.concat(state.dailyReminderProgress) :
                                                        state.previousDailyReminderProgress),
          remindersUpdated: false
        }
      else
        return state
    case UPDATE_DAILY_PROGRESS:
      switch (action.category){
        case "Meal":
          return {...state,
            dailyReminderProgress:{
              ...state.dailyReminderProgress,
              meals: state.dailyReminderProgress.meals.map(item => item.id === action.id ? 
              {...item, isChecked: action.isChecked} :
              item
              ), 
            }            
          }
        case "Water":
          return {...state,
            dailyReminderProgress:{
              ...state.dailyReminderProgress,
              water: state.dailyReminderProgress.water.map(item => item.id === action.id ? 
              {...item, isChecked: action.isChecked} :
              item
              ), 
            }            
          }
        case "Medication":
          return {...state,
            dailyReminderProgress:{
              ...state.dailyReminderProgress,
              meds: state.dailyReminderProgress.meds.map(item => item.id === action.id ? 
              {...item, isChecked: action.isChecked} :
              item
              ), 
            }            
          }
        case "Exercise":
          return {...state,
            dailyReminderProgress:{
              ...state.dailyReminderProgress,
              exercise: state.dailyReminderProgress.exercise.map(item => item.id === action.id ? 
              {...item, isChecked: action.isChecked} :
              item
              ), 
            }            
          }
        default:
          return state;
      }
    case DELETE_ALL_DATA:
      return resetValues;
    
    default:
      return state;
  }
}
export default taskReducer;
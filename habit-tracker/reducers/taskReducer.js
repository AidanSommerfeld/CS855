import { CREATE_TASK, DELETE_TASK, UPDATE_TASK, RENAME_TASK, GET_TASKS_BEFORE} from '../actions/types';
import uuid from 'react-native-uuid';

const taskState = {
  taskList: [],
  dailyTaskList:[],
  weeklyTaskList:[],
  monthlyTaskList:[],
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
    case GET_TASKS_BEFORE:
      return{...state, 
        dailyTaskList: state.taskList.filter((item) =>
          Date.parse(item.deadline) <= Date.parse(action.deadline))
      };
    default:
      return state;
  }
}
export default taskReducer;
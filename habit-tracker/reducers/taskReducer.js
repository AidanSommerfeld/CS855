import { CREATE_TASK, DELETE_TASK} from '../actions/types';

const taskState = {
  taskList: []
}

const taskReducer = (state = taskState, action) => {
  switch(action.type){
    case CREATE_TASK:
      return {
        ...state,
        taskList: state.taskList.concat({
          id: Math.random(),
          title: action.title,
          isChecked: action.checked
      })};
    case DELETE_TASK:
      return {
        ...state, 
        tasklist: state.tasklist.filter((item) =>
        item.key !== action.key)
      };
    default:
      return state;
  }
}
export default taskReducer;
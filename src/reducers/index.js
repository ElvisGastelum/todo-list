import { combineReducers } from 'redux';
import todoList from './listReducer';

export default combineReducers({
  todoList,
});

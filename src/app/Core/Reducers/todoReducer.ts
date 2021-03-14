import { TodoAction } from './../Actions/todoAction';
import { todoConstant } from './../Constants/todoConstant';
import { Todo } from './../Models';
 
export const initialState = {};
 
export function todoReducer(state = initialState, action: TodoAction) {
 
  switch (action.type) {
 
    case todoConstant.GET_TODOS_REQUEST: {
      return { loading: true };
    }
 
    case todoConstant.GET_TODOS_SUCCESS: 
      let msgText = '';
      let bgClass = '';
 
      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'bg-info';
      }
 
      return {
        ...state,
        todoList: action.payload,
        message: msgText,
        loading: 'done'
      };
    
 
    case todoConstant.GET_TODOS_FAILURE: {
      return { 
        ...state, 
        loading: 'done' };
    }
}
}

import { Action } from '@ngrx/store';
import { Todo } from '../Models';
import { todoConstant } from '../Constants/todoConstant'
 
 
 
 
export class GetTodos implements Action {
  readonly type = todoConstant.GET_TODOS_REQUEST;
}
 
export class GetTodosSuccess implements Action {
  readonly type = todoConstant.GET_TODOS_SUCCESS;
  constructor(public payload: Array<Todo>) { }
}
 
export class GetTodosFailed implements Action {
  readonly type = todoConstant.GET_TODOS_FAILURE;
  constructor(public payload: string) { }
}
 
export type TodoAction = GetTodos |
  GetTodosSuccess |
  GetTodosFailed;
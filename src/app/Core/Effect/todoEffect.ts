import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { todoService } from './../Services';
import { todoConstant } from './../Constants/todoConstant';
 
import { GetTodosSuccess, GetTodosFailed } from './../Actions/todoAction';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
 
import { Todo } from './../Models';
 
@Injectable()
export class TodosEffects {
 
  constructor(
    private actions$: Actions,
    private todosService: todoService
  ) { }
 
  @Effect()
  getTodos$ = this.actions$.pipe(
    ofType(todoConstant.GET_TODOS_REQUEST),
    switchMap(() =>
      this.todosService.getTodo().pipe(
        map((todos: Array<Todo>) => new GetTodosSuccess(todos)),
        catchError(error => of(new GetTodosFailed(error)))
      )
    )
  );
}
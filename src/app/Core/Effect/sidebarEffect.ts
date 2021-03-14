import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
  
import { sidebarConstant } from '../Constants/sidebarConstant';
 
import { togglSidebar } from '../Actions/sidebarAction';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
 
import { Todo } from '../Models';
 
@Injectable()
export class TodosEffects {
 
  constructor(
    private actions$: Actions
  ) { }
 
  @Effect()
  closeSidebar$ = this.actions$.pipe(
    ofType(sidebarConstant.TOGGLE)
    ) 
}
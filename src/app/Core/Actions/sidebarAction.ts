import { Action } from '@ngrx/store'; 
import { sidebarConstant } from '../Constants/sidebarConstant'
 
  
export class option {
  data?: number; 
}
 
  export class togglSidebar implements Action {
    readonly type = sidebarConstant.TOGGLE;
    constructor(public payload: option) { }
  } 
  
 
export type sidebarAction =  togglSidebar;
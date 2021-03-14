import { sidebarAction } from './../Actions/sidebarAction';
import { sidebarConstant } from '../Constants/sidebarConstant';
 
 
export interface sidebarState {
    data: number
}
 
const initialState: sidebarState = {
    data: 0
};
 
export function sidebarReducer(state = initialState, action: sidebarAction): sidebarState {
 
    switch (action.type) {
        case sidebarConstant.TOGGLE: {
            return {
                data:<number> action.payload
            }
        }
  
        default:
            return state;
    }
}
 
import { UIState } from "./";

type UIActionType = 
| { type: '[UI - OPEN_SIDE_MENU]'}
| { type: '[UI - CLOSE_SIDE_MENU]'}

export const uiReducer = (state: UIState, action: any): UIState => {

  switch (action.type) {
    case '[UI - OPEN_SIDE_MENU]':
      return {
        ...state,
        sideMenuOpen: true,
      }
      case '[UI - CLOSE_SIDE_MENU]':
    return {
        ...state,
        sideMenuOpen: false,
      }
    default:
      console.log('action no registered', action)
      return state
  }
}
import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
}

export const UIProvider:FC = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: '[UI - OPEN_SIDE_MENU]' });
  }

  const closeSideMenu = () => {
    dispatch({ type: '[UI - CLOSE_SIDE_MENU]' });
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      openSideMenu,
      closeSideMenu,
    }}>
      {children}
    </UIContext.Provider>
  )
}
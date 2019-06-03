import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { actionTypes } from './types';

// ACTIONS
export const resetSidebar = () => {
  return { type: actionTypes.RESET };
};

export const setSidebar = () => {
  return { type: actionTypes.SET };
};

export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
}

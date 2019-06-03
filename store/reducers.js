import { initialState, actionTypes } from './types';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return Object.assign({}, state, {
        username: initialState.username,
        token: initialState.token
      });
    case actionTypes.SET:
      return Object.assign({}, state, {
        username: state.username,
        token: state.token
      });
    default:
      return state;
  }
};

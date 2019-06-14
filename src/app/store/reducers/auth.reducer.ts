import * as authActions from '../actions/auth.actions';
import {User} from '../../models/user.model';

export const getUsersList = (state: State) => state.users;

export interface State {
  users?: User[];
  loggedInUser?: User;
}

export const initialState: State = {
  users: JSON.parse(localStorage.getItem('state')) ?
    JSON.parse(localStorage.getItem('state')).auth.users :
    [],
  loggedInUser: JSON.parse(localStorage.getItem('state')) ?
    JSON.parse(localStorage.getItem('state')).auth.loggedInUser :
    null
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);
    case authActions.AuthActionTypes.LoginUser:
      return handleLogin(state, action);
    case authActions.AuthActionTypes.LogoutUser:
      return handleLogout(state, action);
    default:
      return state;
  }
}

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,
    users: [...state.users, action.payload],
  };
}

function handleLogin(state: State, action: authActions.LoginUser): State {
  return {
    ...state,
    loggedInUser: action.payload
  };
}

function handleLogout(state: State, action: authActions.LogoutUser): State {
  return {
    ...state,
    loggedInUser: null
  };
}

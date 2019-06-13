import * as authActions from '../actions/auth.actions';
import {User} from '../../models/user.model';

export const getUsersList = (state: State) => state.users;

export interface State {
  users?: User[];
}

export const initialState: State = {
  users: []
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);
      break;
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

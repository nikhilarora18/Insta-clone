import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: User) {}
}


export type AuthActions = LoadAuths | SetAuths;

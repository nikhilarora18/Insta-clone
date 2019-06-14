import {Injectable} from '@angular/core';
import {User} from '../../../models/user.model';
import * as authActions from '../../../store/actions/auth.actions';
import {State, Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';

@Injectable()
export class AuthService {

  constructor(private store: Store<fromRoot.State>,
              private state: State<fromRoot.State>) {
  }

  registerUser(user: User) {
    let isUserRegistered = false;
    const users: User[] = this.state.getValue().auth.users;
    return new Promise((resolve, reject) => {
      users.forEach(USER => {
        if (USER.username === user.username) {
          isUserRegistered = true;
          reject('This username is already in use. Please choose a unique username');
        }
      });
      if (!isUserRegistered) {
        this.store.dispatch(new authActions.SetAuths(user));
        this.store.dispatch(new authActions.LoginUser(user));
        this.store.subscribe(() => {
          localStorage.setItem('state', JSON.stringify(this.state.getValue()));
        });
        resolve();
      }
    });
  }

  loginUser(username: string, password: string) {
    let isUserRegistered = false;
    const users: User[] = this.state.getValue().auth.users;
    return new Promise((resolve, reject) => {
      users.forEach(user => {
        if (user.username === username) {
          isUserRegistered = true;
          if (user.password === password) {
            this.store.dispatch(new authActions.LoginUser(user));
            this.store.subscribe(() => {
              localStorage.setItem('state', JSON.stringify(this.state.getValue()));
            });
            resolve();
          } else {
            reject('Password is incorrect');
          }
        }
      });
      if (!isUserRegistered) {
        reject('User is not registered');
      }
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      this.store.dispatch(new authActions.LogoutUser());
      this.store.subscribe(() => {
        localStorage.setItem('state', JSON.stringify(this.state.getValue()));
      });
      resolve();
    });
  }
}

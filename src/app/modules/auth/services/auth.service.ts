import {Injectable} from '@angular/core';
import {User} from '../../../models/user.model';
import * as authActions from '../../../store/actions/auth.actions';
import {Router} from '@angular/router';
import {State, Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private store: Store<fromRoot.State>,
              private state: State<fromRoot.State>,
              private snackbar: MatSnackBar) {
  }

  registerUser(user: User) {
    let isUserRegistered = false;
    const users: User[] = this.state.getValue().auth.users;
    users.forEach(USER => {
      if (USER.username === user.username) {
        isUserRegistered = true;
        this.snackbar.open('This username is already in use. Please choose a unique username', 'Dismiss', {
          duration: 2000,
        });
      }
    });
    if (!isUserRegistered) {
      this.store.dispatch(new authActions.SetAuths(user));
      this.store.dispatch(new authActions.LoginUser(user));
      this.store.subscribe(() => {
        localStorage.setItem('state', JSON.stringify(this.state.getValue()));
      });
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(username: string, password: string) {
    let isUserRegistered = false;
    const users: User[] = this.state.getValue().auth.users;
    users.forEach(user => {
      if (user.username === username) {
        isUserRegistered = true;
        if (user.password === password) {
          this.store.dispatch(new authActions.LoginUser(user));
          this.store.subscribe(() => {
            localStorage.setItem('state', JSON.stringify(this.state.getValue()));
          });
          this.router.navigate(['/dashboard']);
        } else {
          this.snackbar.open('Password is incorrect', 'Dismiss', {
            duration: 2000,
          });
        }
      }
    });
    if (!isUserRegistered) {
      this.snackbar.open('User is not registered', 'Dismiss', {
        duration: 2000,
      });
    }
  }
}

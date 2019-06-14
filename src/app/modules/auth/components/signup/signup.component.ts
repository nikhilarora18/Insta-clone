import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  controls = {
    email: new FormControl(null, [Validators.required, Validators.email]),
    fullName: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  };

  signupFormGroup = new FormGroup(this.controls);

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  signup() {
    const user: User = {
      username: this.controls.username.value,
      fullName: this.controls.fullName.value,
      isPrivate: false,
      followers: 0,
      following: 0,
      posts: 0,
      isBusinessAccount: false,
      password: this.controls.password.value,
      email: this.controls.email.value
    };
    this.authService.registerUser(user).then(
      () => {
        this.snackbar.open('You have been registered',
          'Dismiss',
          {
            duration: 2000
          });
        this.router.navigate(['/dashboard']);
      },
      () => {
        this.snackbar.open('This username is already in use. Please choose a unique username',
          'Dismiss',
          {
            duration: 2000
          });
      }
    );
  }
}




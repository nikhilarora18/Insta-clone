import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  controls = {
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  };

  loginFormGroup = new FormGroup(this.controls);

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  login() {
    this.authService.loginUser(this.controls.username.value, this.controls.password.value).then(
      () => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.snackbar.open(error, 'Dismiss', {
          duration: 2000,
        });
      }
    );
  }
}

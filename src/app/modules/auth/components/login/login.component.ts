import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

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

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.loginUser(this.controls.username.value, this.controls.password.value);
  }
}

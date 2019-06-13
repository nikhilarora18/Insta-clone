import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/dashboard']);
  }
}

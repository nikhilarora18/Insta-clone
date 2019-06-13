import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  controls = {
    mobileOrEmail: new FormControl(null, Validators.required),
    fullName: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  };

  signupFormGroup = new FormGroup(this.controls);

  constructor(private router: Router) {}

  signup() {
    this.router.navigate(['/dashboard']);
  }

}

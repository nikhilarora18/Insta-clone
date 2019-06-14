import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private snackbar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.logoutUser().then(
      () => {
        this.snackbar.open('You have been logged out', 'Dismiss', {duration: 2000});
        this.router.navigate(['/login']);
      },
      () => {
        console.log('error');
      }
    );
  }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CreatePostDialogComponent} from '../create-post-dialog/create-post-dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,
              private dialog: MatDialog) {
  }

  logout() {
    this.router.navigate(['/logout']);
  }

  openCreatePostDialog() {
    this.dialog.open(CreatePostDialogComponent, {
      width: '50%'
    });
  }
}

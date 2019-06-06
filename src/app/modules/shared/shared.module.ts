import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post/post.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PostHeaderComponent} from './post/post-header/post-header.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const commonModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
];

const components = [
  PostComponent,
  NavbarComponent,
  PostHeaderComponent
];

@NgModule({
  imports: [
    ...commonModules
  ],
  exports: [
    ...commonModules,
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class SharedModule {
}

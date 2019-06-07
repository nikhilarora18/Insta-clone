import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post/post.component';
import {NavbarComponent} from './navbar/navbar.component';
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
  MatToolbarModule,
  MatCardModule
];

const components = [
  PostComponent,
  NavbarComponent
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

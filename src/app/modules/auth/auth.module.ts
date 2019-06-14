import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from './services/auth.service';
import {MatSnackBarContainer} from '@angular/material';
import {LogoutComponent} from './components/logout/logout.component';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  providers: [AuthService],
  entryComponents: [MatSnackBarContainer]
})
export class AuthModule {
}

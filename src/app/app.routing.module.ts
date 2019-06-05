import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: UserDashboardComponent
  },
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDashboardComponent} from './components/user-dashboard/user-dashboard.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

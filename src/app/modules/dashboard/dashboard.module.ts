import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './components/user-dashboard/user-dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [UserDashboardComponent]
})
export class DashboardModule {
}

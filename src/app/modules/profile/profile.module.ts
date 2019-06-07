import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ProfileRoutingModule} from './profile-routing.module';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [UserProfileComponent]
})
export class ProfileModule {
}

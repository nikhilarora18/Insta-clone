import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule} from './modules/auth/auth.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {ProfileModule} from './modules/profile/profile.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppEffects} from './store/effects/app.effects';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    ProfileModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import * as fromLanguage from './shared/state/language/language.reducer';

import { LanguageComponent } from './components/language/language.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromActionsLanguage from './shared/state/language/language.actions';
import { MaterialModule } from './shared/material/material.module';
import {MatInputModule} from '@angular/material/input';

import * as fromReset from './shared/state/auth/reset';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignupFormComponent } from './components/sign-up/forms/signup-form.component';
import { LoginFormComponent } from './components/log-in/forms/login-form.component';

import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';

import {LanguageEffects } from './shared/state/language/language.effects';

import { StateMachineModule } from '../../projects/state-machine/src/public_api';

export interface AppState {
  auth: fromReset.AuthState;
  language: fromActionsLanguage.AppState;
}




@NgModule({
  declarations: [AppComponent,
    LanguageComponent, LandingComponent, SignUpComponent,
    LogInComponent, SignupFormComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StateMachineModule,
    MatInputModule,
    EffectsModule.forRoot([AuthEffects, LanguageEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ]),
    AppRoutingModule,
    MaterialModule,

    StoreModule.forRoot({ AppData: fromActionsLanguage.simpleReducer }),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

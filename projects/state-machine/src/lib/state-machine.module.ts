import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../../../src/environments/environment';
import { StateMachineComponent } from './state-machine.component';
// State management
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './+app-state/app.selectors';
// Common imports
import { CustomRouterStateSerializer } from './common';
// State persistence
import { DBModule } from '@ngrx/db';
import { schema } from './config/configuration';
import { ApplicationEffects } from './+app-state/app.effects';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({}) : [],
    EffectsModule.forRoot([ApplicationEffects]),
    DBModule.provideDB(schema)
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  declarations: [StateMachineComponent],
  exports: [StateMachineComponent]
})
export class StateMachineModule {}

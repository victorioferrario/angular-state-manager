import { AppState } from './../../shared/state/language/language.actions';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from '../../shared/state/language/language.actions';
import { InstanceOfAppState } from '../../shared/state/language/language.actions';
import { MatSnackBar } from '@angular/material';
import {LanguageEffects } from '../../shared/state/language/language.effects';
export interface IAppData {
  message: string;
  language: string;
}
export class AppData implements IAppData {
  message: string;
  language: string;
}
export interface IResult {
  AppData: IAppData;
}
export class Result implements IResult {
  AppData: AppData;
}

@Component({
  selector: 'app-language',
  styleUrls: ['./language.component.scss'],
  template: `
    <main class="content"
        fxLayout="row"
        fxLayout.xs="column"
        fxFlexFill >
        <div fxFlex="80" class="sec1" fxFlex.xs="55">
          <mat-button-toggle-group name="language" aria-label="Language" >
            <mat-button-toggle value="English"  (click)="speakEnglish()" >English</mat-button-toggle>
            <mat-button-toggle value="French"   (click)="speakFrench()"  >French</mat-button-toggle>
            <mat-button-toggle value="Spanish"  (click)="speakSpanish()" >Spanish</mat-button-toggle>
            <mat-button-toggle value="Russian"  (click)="speackRussian()">Russian</mat-button-toggle>
          </mat-button-toggle-group>
          <ng-content></ng-content>
        </div>
        <div fxFlex="30" class="sec2" >
          <div>Current language:<br/>
           {{ message  }}</div>
        </div>
    </main>
    `
})
export class LanguageComponent {
  message: string;
  constructor(private store: Store<AppState>, public snackBar: MatSnackBar, langEffects: LanguageEffects) {
    langEffects.LanguageSpanish.subscribe((result: any) => {
      console.log(result.type);
      this.message = result.type.toString();
    });
    langEffects.LanguageFrench.subscribe((result: any) => {
      this.message = result.type.toString();
     console.log(result.type);
    });
    langEffects.LanguageEnglish.subscribe((result: any) => {
      this.message = result.type.toString();
     console.log(result.type);
    });
    langEffects.LanguageRussian.subscribe((result: any) => {
      this.message = result.type.toString();
     console.log(result.type);
    });
   const item =  store.pipe(select('AppData'));
   console.dir(item);
   store.pipe().subscribe((arg: any) => {
    console.log(arg, arg instanceof Result);
   });
  }
  speakEnglish() {
    this.store.dispatch(new fromActions.SpeakEnglish());
    this.openSnackBar(
      'Language Changed:',
      fromActions.LanguageActionTypes.ENGLISH.toString()
    );
  }
  speakFrench() {
    this.store.dispatch(new fromActions.SpeakFrench());
    this.openSnackBar(
      'Language Changed:',
      fromActions.LanguageActionTypes.FRENCH.toString()
    );
  }
  speakSpanish() {
    this.store.dispatch(new fromActions.SpeakSpanish());
    this.openSnackBar(
      'Language Changed:',
      fromActions.LanguageActionTypes.SPANISH.toString()
    );
  }
  speackRussian() {
    this.store.dispatch(
      new fromActions.SpeakLanguage(fromActions.LanguageActionTypes.RUSSIAN)
    );
    this.openSnackBar(
      'Language Changed:',
      fromActions.LanguageActionTypes.RUSSIAN.toString()
    );
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}

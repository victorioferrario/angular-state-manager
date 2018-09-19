import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LanguageActionTypes, LanguageActionsUnion} from './language.actions';
import { Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
@Injectable()
export class LanguageEffects {
  constructor(
    private actions: Actions) {
        console.log('effect');
    }
    @Effect({ dispatch: false })
    LanguageSpanish: Observable<any> = this.actions.pipe(
      ofType(LanguageActionTypes.SPANISH),
      tap(data => {
            return data;
      })
    );
    @Effect({ dispatch: false })
    LanguageFrench: Observable<any> = this.actions.pipe(
      ofType(LanguageActionTypes.FRENCH),
      tap(data => {
            return data;
      })
    );
    @Effect({ dispatch: false })
    LanguageRussian: Observable<any> = this.actions.pipe(
      ofType(LanguageActionTypes.RUSSIAN),
      tap(data => {
            return data;
      })
    );
    @Effect({ dispatch: false })
    LanguageEnglish: Observable<any> = this.actions.pipe(
      ofType(LanguageActionTypes.ENGLISH),
      tap(data => {
            return data;
      })
    );
}

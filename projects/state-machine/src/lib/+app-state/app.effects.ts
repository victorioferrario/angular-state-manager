import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, defer } from 'rxjs';
import { Database } from '@ngrx/db';
import { Action } from '@ngrx/store';
import { environment } from '../../../../../src/environments/environment';

@Injectable()
export class ApplicationEffects {

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open(environment.OFFLINE_DATABASE_NAME);
  });
  constructor(
    private actions$: Actions,
    private db: Database
  ) { }
}

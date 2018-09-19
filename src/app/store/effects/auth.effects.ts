import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

import {
  AuthActionTypes,
  LogIn,
  LogInSuccess,
  LogInFailure,
  SignUp,
  SignUpSuccess,
  SignUpFailure
} from '../actions/auth.actions';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  // effects go here
  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap((payload: User) =>
      this.authService.logIn(payload.email, payload.password).pipe(
        map((user: User) => {
          console.log('data', user);
          return new LogInSuccess({ token: user.token, email: payload.email });
        })
      )
    )
  );
  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );
  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap((payload: User) =>
      this.authService.signUp(payload.email, payload.password).pipe(
        map((user: User) => {
          return new SignUpSuccess({
            token: user.token,
            email: payload.email
          });
        })
      )
    )
  );
  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );
}
// ToDO: You could combine SignUpFailure and LogInFailure, to make a single effect:
// AuthFailure: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.SIGNUP_FAILURE, AuthActionTypes.LOGIN_FAILURE)
//   );

import { Action } from '@ngrx/store';
import { IAuthLogin } from './models';
/**
 * @export
 * @enum {number}
 */
export enum Authentication_ActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure'
}
/**
 * **********************************************
 *              AUTHENTICATION ACTIONS
 * **********************************************
/**
 * @export
 * @class LoginAction
 * @implements {Action}
 */
export class LoginAction implements Action {
  readonly type = Authentication_ActionTypes.LOGIN;
  constructor(public payload: IAuthLogin) {}
}
/**
 * @export
 * @class LoginSuccessAction
 * @implements {Action}
 */
export class LoginSuccessAction implements Action {
  readonly type = Authentication_ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: IAuthLogin) {}
}
/**
 * @export
 * @class LoginFailureAction
 * @implements {Action}
 */
export class LoginFailureAction implements Action {
  readonly type = Authentication_ActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}
/**
 * @export
 * @class LogoutAction
 * @implements {Action}
 */
export class LogoutAction implements Action {
  readonly type = Authentication_ActionTypes.LOGOUT;
  constructor(public payload: IAuthLogin) {}
}
/**
 * @export
 * @class LogoutSuccessAction
 * @implements {Action}
 */
export class LogoutSuccessAction implements Action {
  readonly type = Authentication_ActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: IAuthLogin) {}
}
/**
 * @export
 * @class LogoutFailureAction
 * @implements {Action}
 */
export class LogoutFailureAction implements Action {
  readonly type = Authentication_ActionTypes.LOGOUT_FAILURE;
  constructor(public payload: IAuthLogin) {}
}
export class GenericAction<T, P> {
    readonly type: T;
    public payload: P;
    constructor(t: T, p: P) {
        this.type = t;
        this.payload = p;
    }
}
export type AuthenticationActionsUnion =
     LoginAction
   | LogoutAction
   | LoginSuccessAction
   | LoginFailureAction
   | LogoutSuccessAction
   | LogoutFailureAction  ;


   // { AuthenticationActionsUnion, Authentication_ActionTypes}

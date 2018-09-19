import { IAuthState } from './models';
import {  AuthenticationActionsUnion, Authentication_ActionTypes} from './auth.actions';

export interface State extends IAuthState {
    pending: boolean;
    loggedIn: boolean;
}
export const initialState: State = {
  user: null,
  error: null,
  pending: false,
  loggedIn: false,
  isLoaded: false,
  isAuthenticated: false,
  systemMessage: {
    isError: false,
    Message: 'startng...'
  }
};
export function reducer(state = initialState, action: AuthenticationActionsUnion): State {
    switch (action.type) {
        case Authentication_ActionTypes.LOGIN: {
            return {
                ...state,
                user: action.payload,
                error: null,
                pending: true,
                isLoaded: true,
                isAuthenticated: false,
                systemMessage: {
                    isError: false,
                    Message: 'start login...'
                }
            };
        }
        case Authentication_ActionTypes.LOGIN_SUCCESS : {
            return {
                ...state,
                error: 'none',
                pending: false,
                isLoaded: false,
                user: action.payload,
                isAuthenticated : true,
                systemMessage: {
                    isError: false,
                    Message: 'success loggedin'
                }
            };
        }
        case Authentication_ActionTypes.LOGIN_FAILURE : {
            return {
                ...state,
                error: 'true',
                pending: false,
                isLoaded: false,
                user: action.payload,
                isAuthenticated : false,
                systemMessage: {
                    isError: true,
                    Message: 'failded loggedin'
                }
            };
        }
        case Authentication_ActionTypes.LOGOUT : {
            return {
                ...state,
                error: 'none',
                pending: true,
                isLoaded: true,
                user: action.payload,
                isAuthenticated : true,
                systemMessage: {
                    isError: false,
                    Message: 'logging out'
                }
            };
        }
        case Authentication_ActionTypes.LOGOUT_SUCCESS : {
            return {
                ...state,
                error: 'none',
                pending: false,
                isLoaded: false,
                user: null,
                isAuthenticated : false,
                systemMessage: {
                    isError: false,
                    Message: 'logged out successful'
                }
            };
        }
        case Authentication_ActionTypes.LOGOUT_FAILURE : {
            return {
                ...state,
                error: 'true',
                pending: false,
                isLoaded: false,
                user: null,
                isAuthenticated : false,
                systemMessage: {
                    isError: true,
                    Message: 'error logging out'
                }
            };
        }
    }
}

export const getUser = (state: IAuthState) => state.user;
export const getPending = (state: IAuthState) => state.isLoaded;
export const getError = (state: IAuthState) => state.systemMessage;
export const getAuthenticated = (state: IAuthState) => state.isAuthenticated;



import * as fromAuthentication from './auth.reducers';

export interface AuthenticationState {
    status: fromAuthentication.State;
    loginScreen: fromAuthentication.State;
}



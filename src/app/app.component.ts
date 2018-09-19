import { IAuthState } from './../../projects/state-machine/src/lib/+auth-state/models/IAuthState';
import { AuthenticationActionsUnion } from './../../projects/state-machine/src/lib/+auth-state/auth.actions';
import { IAuthLogin } from './../../projects/state-machine/src/lib/+auth-state/models/IAuthLogin';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, toAuth } from '../../projects/state-machine/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stateapp';
  constructor(private store: Store<State>) {
    const auth: IAuthState = {
      error: '',
      user : {
        username: 'manny@hubx.com',
        email: 'manny@hubx.com',
        password: 'i@hudson33'
      }
    };
    toAuth.getAuthenticated(auth);
  }

}

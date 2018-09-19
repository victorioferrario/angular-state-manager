import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

import { Store } from '@ngrx/store';

import { AppState } from '../../../store/app.states';
import { LogIn } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: User = new User();
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  onSubmit(): void {
    console.log(this.user);
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }
}

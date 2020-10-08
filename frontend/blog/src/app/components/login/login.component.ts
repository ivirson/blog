import { AppState } from './../../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromLogin from './../../core/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() { }

  public submitLogin() {
    this.store$.dispatch(new fromLogin.actions.SubmitLogin(this.loginForm.value));
  }

}

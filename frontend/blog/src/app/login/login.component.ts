import { selectLoginError } from './../core/login/login.selectors';
import { User } from './../models/user.model';
import { AppState } from './../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromLogin from './../core/login';
import { selectUser } from '../core/login/login.selectors';
import { first, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;
  public error$: HttpErrorResponse;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
  }

  public submitLogin() {
    this.store$.dispatch(new fromLogin.actions.SubmitLogin(this.loginForm.value));
    // this.store$.select(selectUser)
    // .pipe(first())
    // .subscribe(
    //   (res: User) => {
    //     this.user = res ? res : null;
    //   }
    // );
    this.getLoginErrors();
  }

  public getLoginErrors() {
    this.store$.select(selectLoginError)
    .pipe(first())
    .subscribe(
      (res: HttpErrorResponse) => {
        this.error$ = res;
        console.log(this.error$);
      }
    );
  }

}

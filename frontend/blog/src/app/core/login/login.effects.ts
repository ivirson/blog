import { LoginService } from './../../services/login/login.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, catchError, tap, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as actions from './login.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  submitLoginAction = this.actions$.pipe(
    ofType<actions.SubmitLogin>(actions.ActionTypes.SUBMIT_LOGIN),
    switchMap(action =>
      this.loginService.login(action.payload).pipe(
        switchMap((response: any) => {
          return of(new actions.SubmitLoginSuccess(response));
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new actions.SubmitLoginError(error));
        })
      )
    )
  );

  @Effect({ dispatch: false })
  onSuccess = this.actions$.pipe(
    ofType<actions.SubmitLoginSuccess>(actions.ActionTypes.SUBMIT_LOGIN_SUCCESS),
    tap(
      () => {
        this.router.navigate(['home']);
      }
    )
  );

  @Effect({ dispatch: false })
  onError = this.actions$.pipe(
    ofType<actions.SubmitLoginError>(actions.ActionTypes.SUBMIT_LOGIN_ERROR),
    tap(
      (err) => {
        this.router.navigate(['login']);
      }
    )
  );
}

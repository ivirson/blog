import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as actions from './authors.actions';
import { AuthorsService } from 'src/app/services/authors/authors.service';


@Injectable()
export class AuthorsEffects {
  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}

  @Effect()
  submitLoginAction = this.actions$.pipe(
    ofType<actions.GetAuthors>(actions.ActionTypes.GET_AUTHORS),
    switchMap(() =>
      this.authorsService.getAuthors().pipe(
        switchMap((response: any) => {
          return of(new actions.GetAuthorsSuccess(response));
        }),
        catchError((error: any) => {
          return of(new actions.GetAuthorsError(error));
        })
      )
    )
  );
}

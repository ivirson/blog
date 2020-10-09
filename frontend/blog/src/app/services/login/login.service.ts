import { Store } from '@ngrx/store';
import { AppState } from './../../core/index';
import { AuthUser } from './../../models/auth-user.model';
import { first, map } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';
import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromLogin from '../../core/login';
import { selectUser } from 'src/app/core/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private store$: Store<AppState>
  ) { }

  public login(user: User): Observable<User> {
    const endpoint = `${environment.apiRootUrl}/auth/login`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(endpoint, user, { headers: header })
      .pipe(map(
        (res: User) => res
      ));
  }

  public getUser(): Observable<AuthUser> {
    this.store$.dispatch(new fromLogin.actions.GetUser());
    return this.store$.select(selectUser)
    .pipe(
      first(),
      map(
        (res: AuthUser) => {
          return res;
        }
      )
    );
  }
}

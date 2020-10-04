import { first, map } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

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
}

import { User } from './../../models/user.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<User[]> {
    const endpoint = `${environment.apiRootUrl}/users/authors`;
    return this.http.get<User[]>(endpoint);
  }
}

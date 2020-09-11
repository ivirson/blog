import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiRootUrl + 'posts');
  }

  public getLatestPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiRootUrl + 'posts/latest');
  }
}

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
    const endpoint = `${environment.apiRootUrl}/posts`;
    return this.http.get<Post[]>(endpoint);
  }

  public getLatestPosts(qty: number): Observable<Post[]> {
    const endpoint = `${environment.apiRootUrl}/posts/latest/${qty}`;
    return this.http.get<Post[]>(endpoint);
  }

  public getPopularPosts(qty: number): Observable<Post[]> {
    const endpoint = `${environment.apiRootUrl}/posts/popular/${qty}`;
    return this.http.get<Post[]>(endpoint);
  }

  public getPostById(id: number): Observable<Post> {
    const endpoint = `${environment.apiRootUrl}/posts/${id}`;
    return this.http.get<Post>(endpoint);
  }
}

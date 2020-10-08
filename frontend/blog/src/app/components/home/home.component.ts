import { Router } from '@angular/router';
import { selectAuthors } from './../../core/authors/authors.selectors';
import { selectPosts, selectHighlightPosts, selectPopularPosts } from './../../core/posts/posts.selectors';
import { AppState } from './../../core/index';
import { Post } from 'src/app/models/post.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromAuthors from './../../core/authors';
import * as fromPosts from './../../core/posts';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public latestPost: Post;
  public highlightPosts: Post[];
  public posts: Post[];
  public popularPosts: Post[];
  public authors: User[];
  public page = 1;
  public total: number;
  public asyncPosts: Observable<Post[]>;

  constructor(
    private store$: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getHighlightPosts();
    this.getPopularPosts();
    this.getAuthors();
  }

  public getPostDetail(id: number) {
    this.router.navigate(['post', id]);
  }

  public getPosts() {
    this.store$.dispatch(new fromPosts.actions.GetPosts());
    this.store$.select(selectPosts)
    .subscribe(
      (res: Post[]) => {
        this.posts = res;
      }
    );
  }

  public getHighlightPosts() {
    this.store$.dispatch(new fromPosts.actions.GetHighlightPosts(5));
    this.store$.select(selectHighlightPosts)
    .subscribe(
      (res: Post[]) => {
        this.latestPost = res ? res[0] : null;
        this.highlightPosts = res ? res.slice(1, res.length) : null;
      }
    );
  }

  public getPopularPosts() {
    this.store$.dispatch(new fromPosts.actions.GetPopularPosts(4));
    this.store$.select(selectPopularPosts)
    .subscribe(
      (res: Post[]) => {
        this.popularPosts = res ? res : null;
      }
    );
  }

  public getAuthors() {
    this.store$.dispatch(new fromAuthors.actions.GetAuthors());
    this.store$.select(selectAuthors)
    .subscribe(
      (res: User[]) => {
        this.authors = res ? res : null;
      }
    );
  }

}

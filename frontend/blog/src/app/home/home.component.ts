import { selectAuthors } from './../core/authors/authors.selectors';
import { Post } from 'src/app/models/post.model';
import { selectHighlightPosts, selectPopularPosts, selectPosts } from './../core/posts/posts.selectors';
import { AppState } from './../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromPosts from './../core/posts';
import * as fromAuthors from './../core/authors';
import { User } from '../models/user.model';

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

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getHighlightPosts();
    this.getPopularPosts();
    this.getAuthors();
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
    this.store$.dispatch(new fromPosts.actions.GetPopularPosts(6));
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

import { Post } from 'src/app/models/post.model';
import { selectHighlightPosts, selectPosts } from './../core/posts/posts.selectors';
import { AppState } from './../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromPosts from './../core/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public latestPost: Post;
  public highlightPosts: Post[];
  public posts: Post[];

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.getHighlightPosts();
    this.getPosts();
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

}

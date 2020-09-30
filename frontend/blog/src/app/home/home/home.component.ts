import { Post } from 'src/app/models/post.model';
import { selectLatestPosts, selectHighlightPosts } from './../../core/posts/posts.selectors';
import { AppState } from './../../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromPosts from './../../core/posts';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public highlightPosts: Post[];

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.getHighlightPosts();
  }

  public getHighlightPosts() {
    this.store$.dispatch(new fromPosts.actions.GetHighlightPosts(5));
    this.store$.select(selectHighlightPosts)
    .subscribe(
      (res: Post[]) => {
        this.highlightPosts = res;
      }
    );
  }

}

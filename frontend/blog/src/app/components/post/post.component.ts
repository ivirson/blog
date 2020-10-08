import { Store } from '@ngrx/store';
import { AppState } from './../../core/index';
import { Post } from 'src/app/models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromPosts from './../../core/posts';
import { selectPostById } from 'src/app/core/posts/posts.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public id: number;
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.getPost();
  }

  public getPost() {
    this.store$.dispatch(new fromPosts.actions.GetPostById(this.id));
    this.store$.select(selectPostById)
    .subscribe(
      (res: Post) => {
        this.post = res;
      }
    );
  }

}

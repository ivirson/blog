import { selectLatestPosts } from './../../core/posts/posts.selectors';
import { AppState } from './../../core/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Post } from 'src/app/models/post.model';
import { FormControl, FormGroup } from '@angular/forms';
import * as fromPosts from './../../core/posts';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  protected ngUnsubscribe: Subject<any> = new Subject();
  public latestPosts: Array<Post>;

  newsletterForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private store$: Store<AppState>
  ) {}

  ngOnInit() {
    this.getLatestPosts();
  }

  public getLatestPosts() {
    this.store$.dispatch(new fromPosts.actions.GetLatestPosts());
    this.store$.select(selectLatestPosts).subscribe(
      res => {
        this.latestPosts = res.latestPosts;
      }
    );
  }

  public submitForm() {

  }

}

import { Post } from 'src/app/models/post.model';
import { HighLightPost } from './../../../models/highlight-post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights-posts',
  templateUrl: './highlights-posts.component.html',
  styleUrls: ['./highlights-posts.component.scss']
})
export class HighlightsPostsComponent implements OnInit {

  // @Input() public post: HighLightPost;
  @Input() public post: Post;

  constructor() { }

  ngOnInit() {
  }

}

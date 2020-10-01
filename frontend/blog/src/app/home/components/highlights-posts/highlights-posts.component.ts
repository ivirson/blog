import { Post } from 'src/app/models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { PostSize } from 'src/app/constants/post-size.enum';

@Component({
  selector: 'app-highlights-posts',
  templateUrl: './highlights-posts.component.html',
  styleUrls: ['./highlights-posts.component.scss']
})
export class HighlightsPostsComponent implements OnInit {

  @Input() public post: Post;
  @Input() public postSize: PostSize = PostSize.Small;

  constructor() { }

  ngOnInit() {
  }

}

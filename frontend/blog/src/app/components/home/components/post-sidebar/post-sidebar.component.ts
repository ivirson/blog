import { Post } from 'src/app/models/post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-sidebar',
  templateUrl: './post-sidebar.component.html',
  styleUrls: ['./post-sidebar.component.scss']
})
export class PostSidebarComponent implements OnInit {

  @Input() public post: Post;

  constructor() { }

  ngOnInit() {
  }

}

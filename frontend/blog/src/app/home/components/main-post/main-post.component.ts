import { Post } from 'src/app/models/post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.scss']
})
export class MainPostComponent implements OnInit {

  @Input() public post: Post;
  public postContent: string;

  constructor() { }

  ngOnInit() {
    this.postContent = `${this.post.content.substring(0, 250)}...`;
  }

}

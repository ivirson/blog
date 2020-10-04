import { Post } from './../../../../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-post',
  templateUrl: './footer-post.component.html',
  styleUrls: ['./footer-post.component.scss']
})
export class FooterPostComponent implements OnInit {

  @Input() public post: Post;
  public postTitle: string;

  constructor() { }

  ngOnInit() {
    if (this.post && this.post.title.length > 50) {
      this.postTitle = `${this.post.title.substring(0, 50)}...`;
    } else {
      this.postTitle = this.post.title;
    }
  }

}

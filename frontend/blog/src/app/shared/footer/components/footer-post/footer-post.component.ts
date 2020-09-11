import { Post } from './../../../../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-post',
  templateUrl: './footer-post.component.html',
  styleUrls: ['./footer-post.component.scss']
})
export class FooterPostComponent implements OnInit {

  @Input() public post: Post;

  constructor() { }

  ngOnInit() {
  }

}

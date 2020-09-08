import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Array<Post> = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    return this.postsService.getPosts().subscribe((res: Array<Post>) => {
      this.posts = res;
    });
  }
}

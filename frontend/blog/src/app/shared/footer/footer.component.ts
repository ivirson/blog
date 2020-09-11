import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public posts: Array<Post> = new Array<Post>();

  newsletterForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private postsService: PostsService,
    translate: TranslateService
  ) { }

  ngOnInit() {
    this.getLatestPosts();
  }

  public getLatestPosts() {
    return this.postsService.getLatestPosts().subscribe((res: Array<Post>) => {
      this.posts = res;
    });
  }

  public submitForm() {

  }

}

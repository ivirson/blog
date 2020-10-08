import { User } from './../../../../models/user.model';
import { AppState } from './../../../../core/index';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger-profile',
  templateUrl: './blogger-profile.component.html',
  styleUrls: ['./blogger-profile.component.scss']
})
export class BloggerProfileComponent implements OnInit {

  @Input() public author: User;
  public authorBiography: string;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    if (this.author.biography.length > 100) {
      this.authorBiography = `${this.author.biography.substring(0, 100)}...`;
    } else {
      this.authorBiography = this.author.biography;
    }
  }

}

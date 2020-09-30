import { Post } from './post.model';

export interface HighLightPost {
  height: HighLightPostHeight;
  posts: Post[];
}

export enum HighLightPostHeight {
  Small,
  Large
}

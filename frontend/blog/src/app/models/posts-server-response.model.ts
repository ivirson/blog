import { Post } from './post.model';

export interface PostsServerResponse {
  items: Post[];
  total: number;
}

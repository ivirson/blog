import { Post } from './post.model';
import { User } from './user.model';

export interface PostLike {
    id?: number;
    post?: Post;
    postId: number;
    user?: User;
    userId: number;
}
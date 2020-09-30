import { Category } from './category.model';
import { PostLike } from './post-like.model';
import { User } from './user.model';

export interface Post {
    id?: number;
    title: string;
    subtitle: string;
    content: string;
    image?: string;
    date: Date;
    likes?: Array<PostLike>;
    user?: User;
    userId: number;
    active: boolean;
    category?: Category;
    categoryId: number;
}

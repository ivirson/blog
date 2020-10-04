import { PostLike } from './post-like.model';

export interface User {
    id: number;
    name: string;
    surName: string;
    email: string;
    password: string;
    postLikes: Array<PostLike>;
    role: string;
    image: string;
    biography: string;
    title: string;
    active: boolean;
}

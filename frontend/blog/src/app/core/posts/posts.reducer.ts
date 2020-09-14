import { Post } from 'src/app/models/post.model';
import { ActionTypes, PostsActions } from './posts.actions';

export interface PostsState {
    posts: Array<Post> | null;
    latestPosts: Array<Post> | null;
    error: any;
}

export const postsState: PostsState = {
    posts: null,
    latestPosts: null,
    error: null
};

export function postsReducer(state = postsState, action: PostsActions) {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
        {
            return {
                ...state,
                posts: action.payload
            };
        }

        case ActionTypes.GET_POSTS_SUCCESS:
        {
            return {
                ...state,
                posts: action.payload
            };
        }

        case ActionTypes.GET_POSTS_ERROR:
        {
            return {
                ...state,
                error: action.payload
            };
        }

        case ActionTypes.GET_LATEST_POSTS:
        {
            return {
                ...state,
                latestPosts: { ...action.payload }
            };
        }

        case ActionTypes.GET_LATEST_POSTS_SUCCESS:
        {
            return {
                ...state,
                latestPosts: action.payload
            };
        }

        case ActionTypes.GET_LATEST_POSTS_ERROR:
        {
            return {
                ...state,
                error: action.payload
            };
        }

        default:
            return state;
    }

}

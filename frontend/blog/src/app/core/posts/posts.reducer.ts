import { Post } from 'src/app/models/post.model';
import { ActionTypes, PostsActions } from './posts.actions';

export interface PostsState {
    posts: Post[] | null;
    latestPosts: Post[] | null;
    highlightPosts: Post[] | null;
    loading: boolean;
    error: any;
}

export const postsState: PostsState = {
    posts: null,
    latestPosts: null,
    highlightPosts: null,
    loading: false,
    error: null
};

export function postsReducer(state = postsState, action: PostsActions) {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_POSTS_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              posts: action.payload
            };
        }

        case ActionTypes.GET_POSTS_ERROR:
        {
            return {
              ...state,
              loading: false,
              error: action.payload
            };
        }

        case ActionTypes.GET_LATEST_POSTS:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_LATEST_POSTS_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              latestPosts: action.payload
            };
        }

        case ActionTypes.GET_HIGHLIGHT_POSTS:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_HIGHLIGHT_POSTS_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              highlightPosts: action.payload
            };
        }

        default:
            return state;
    }

}

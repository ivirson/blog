import { Post } from 'src/app/models/post.model';
import { ActionTypes, PostsActions } from './posts.actions';

export interface PostsState {
    posts: Post[] | null;
    latestPosts: Post[] | null;
    highlightPosts: Post[] | null;
    popularPosts: Post[] | null;
    post: Post | null;
    loading: boolean;
    error: any;
}

export const postsState: PostsState = {
    posts: null,
    latestPosts: null,
    highlightPosts: null,
    popularPosts: null,
    post: null,
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

        case ActionTypes.GET_POPULAR_POSTS:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_POPULAR_POSTS_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              popularPosts: action.payload
            };
        }

        case ActionTypes.GET_POST_BY_ID:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_POST_BY_ID_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              post: action.payload
            };
        }

        default:
            return state;
    }

}

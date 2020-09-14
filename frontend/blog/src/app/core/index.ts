import { ActionReducerMap } from '@ngrx/store';
import * as posts from './posts';

export interface AppState {
  posts: posts.reducer.PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: posts.reducer.postsReducer
};

export const effects: Array<any> = [
  posts.effects
];

export const initialState = {
  posts: posts.reducer.postsState
};

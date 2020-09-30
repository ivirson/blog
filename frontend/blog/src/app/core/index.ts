import { ActionReducerMap } from '@ngrx/store';
import * as post from './posts';

export interface AppState {
  post: post.reducer.PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  post: post.reducer.postsReducer
};

export const effects: Array<any> = [
  post.effects
];

export const initialState = {
  post: post.reducer.postsState
};

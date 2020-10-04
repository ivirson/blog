import { ActionReducerMap } from '@ngrx/store';
import * as post from './posts';
import * as login from './login';

export interface AppState {
  post: post.reducer.PostsState;
  login: login.reducer.LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  post: post.reducer.postsReducer,
  login: login.reducer.loginReducer
};

export const effects: Array<any> = [
  post.effects,
  login.effects
];

export const initialState = {
  post: post.reducer.postsState,
  login: login.reducer.loginState
};

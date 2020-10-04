import { ActionReducerMap } from '@ngrx/store';
import * as post from './posts';
import * as login from './login';
import * as authors from './authors';

export interface AppState {
  post: post.reducer.PostsState;
  user: login.reducer.LoginState;
  authors: authors.reducer.AuthorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  post: post.reducer.postsReducer,
  user: login.reducer.loginReducer,
  authors: authors.reducer.authorsReducer
};

export const effects: Array<any> = [
  post.effects,
  login.effects,
  authors.effects
];

export const initialState = {
  post: post.reducer.postsState,
  login: login.reducer.loginState,
  authors: authors.reducer.authorsState
};

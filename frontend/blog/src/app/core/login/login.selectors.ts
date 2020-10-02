import { AppState } from './../index';
import { createSelector } from '@ngrx/store';

export const loginSelector = (state: AppState) => state.login;

export const selectUser = createSelector(
  loginSelector,
  state => state.user
);

export const selectLoginError = createSelector(
  loginSelector,
  state => state.error
);

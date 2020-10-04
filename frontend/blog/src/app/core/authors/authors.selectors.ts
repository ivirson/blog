import { AppState } from './../index';
import { createSelector } from '@ngrx/store';

export const authorsSelector = (state: AppState) => state.authors;

export const selectAuthors = createSelector(
  authorsSelector,
  state => state.authors
);

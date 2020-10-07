import { AppState } from './../index';
import { createSelector } from '@ngrx/store';

export const postsSelector = (state: AppState) => state.post;

export const selectPosts = createSelector(
  postsSelector,
  state => state.posts
);

export const selectLatestPosts = createSelector(
  postsSelector,
  state => state.latestPosts
);

export const selectHighlightPosts = createSelector(
  postsSelector,
  state => state.highlightPosts
);

export const selectPopularPosts = createSelector(
  postsSelector,
  state => state.popularPosts
);

export const selectPostById = createSelector(
  postsSelector,
  state => state.post
);

export const selectPostsError = createSelector(
    postsSelector,
    state => state.error
);

import { createSelector } from '@ngrx/store';

export const postsSelector = (state: any) => state.posts;

export const selectPosts = createSelector(
    postsSelector,
    state => state.posts
);

export const selectPostsError = createSelector(
    postsSelector,
    state => state.error
);

export const selectPostsSuccess = createSelector(
    postsSelector,
    state => state.success
);

export const selectLatestPosts = createSelector(
    postsSelector,
    state => state
);

export const selectLatestPostsError = createSelector(
    postsSelector,
    state => state.error
);

export const selectLatestPostsSuccess = createSelector(
    postsSelector,
    state => state.success
);

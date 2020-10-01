import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { of } from 'rxjs';
import * as actions from './posts.actions';


@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}

  @Effect()
  getPostsAction = this.actions$.pipe(
    ofType<actions.GetPosts>(actions.ActionTypes.GET_POSTS),
    switchMap(() =>
      this.postsService.getPosts().pipe(
        switchMap((response: any) => {
          return of(new actions.GetPostsSuccess(response));
        }),
        catchError(err => of(new actions.GetPostsError(err)))
      )
    )
  );

  @Effect()
  getLatestPostsAction = this.actions$.pipe(
    ofType<actions.GetLatestPosts>(actions.ActionTypes.GET_LATEST_POSTS),
    switchMap(action =>
      this.postsService.getLatestPosts(action.payload).pipe(
        switchMap((response: any) => {
          return of(new actions.GetLatestPostsSuccess(response));
        }),
        catchError(err => of(new actions.GetPostsError(err)))
      )
    )
  );

  @Effect()
  getHighlightPostsAction = this.actions$.pipe(
    ofType<actions.GetHighlightPosts>(actions.ActionTypes.GET_HIGHLIGHT_POSTS),
    switchMap(action =>
      this.postsService.getLatestPosts(action.payload).pipe(
        switchMap((response: any) => {
          return of(new actions.GetHighlightPostsSuccess(response));
        }),
        catchError(err => of(new actions.GetPostsError(err)))
      )
    )
  );
}

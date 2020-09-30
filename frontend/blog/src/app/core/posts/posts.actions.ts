import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_POSTS = '[POSTS] Get Posts',
    GET_POSTS_SUCCESS = '[POSTS] Get Posts Success',
    GET_POSTS_ERROR = '[POSTS] Get Posts Error',
    GET_LATEST_POSTS = '[POSTS] Get Latest Posts',
    GET_LATEST_POSTS_SUCCESS = '[POSTS] Get Latest Posts Success',
    GET_HIGHLIGHT_POSTS = '[POSTS] Get Highlight Posts',
    GET_HIGHLIGHT_POSTS_SUCCESS = '[POSTS] Get Highlight Posts Success'
}

export class GetPosts implements Action {
    readonly type = ActionTypes.GET_POSTS;
    constructor(public payload: any) {}
}

export class GetPostsSuccess implements Action {
    readonly type = ActionTypes.GET_POSTS_SUCCESS;
    constructor(public payload: any) {}
}

export class GetPostsError implements Action {
    readonly type = ActionTypes.GET_POSTS_ERROR;
    constructor(public payload: any) {}
}

export class GetLatestPosts implements Action {
    readonly type = ActionTypes.GET_LATEST_POSTS;
    constructor(public payload?: any) {}
}

export class GetLatestPostsSuccess implements Action {
    readonly type = ActionTypes.GET_LATEST_POSTS_SUCCESS;
    constructor(public payload: any) {}
}

export class GetHighlightPosts implements Action {
    readonly type = ActionTypes.GET_HIGHLIGHT_POSTS;
    constructor(public payload?: any) {}
}

export class GetHighlightPostsSuccess implements Action {
    readonly type = ActionTypes.GET_HIGHLIGHT_POSTS_SUCCESS;
    constructor(public payload: any) {}
}

export type PostsActions =
    | GetPosts
    | GetPostsSuccess
    | GetPostsError
    | GetLatestPosts
    | GetLatestPostsSuccess
    | GetHighlightPosts
    | GetHighlightPostsSuccess;

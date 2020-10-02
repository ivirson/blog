import { Action } from '@ngrx/store';

export enum ActionTypes {
  SUBMIT_LOGIN = '[LOGIN] Submit Login',
  SUBMIT_LOGIN_ERROR = '[LOGIN] Submit Login Error',
  SUBMIT_LOGIN_SUCCESS = '[LOGIN] Submit Login Success',
  GET_USER = '[LOGIN] Get User',
  GET_USER_SUCCESS = '[LOGIN] Get User Success',
  GET_USER_ERROR = '[LOGIN] Get User Error'
}

export class SubmitLogin implements Action {
  readonly type = ActionTypes.SUBMIT_LOGIN;
  constructor(public payload?: any) {}
}

export class SubmitLoginSuccess implements Action {
  readonly type = ActionTypes.SUBMIT_LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}

export class SubmitLoginError implements Action {
  readonly type = ActionTypes.SUBMIT_LOGIN_ERROR;
  constructor(public payload?: any) {}
}

export class GetUser implements Action {
  readonly type = ActionTypes.GET_USER;
  constructor(public payload?: any) {}
}

export class GetUserSuccess implements Action {
  readonly type = ActionTypes.GET_USER_SUCCESS;
  constructor(public payload?: any) {}
}

export class GetUserError implements Action {
  readonly type = ActionTypes.GET_USER_ERROR;
  constructor(public payload?: any) {}
}

export type LoginActions =
    | SubmitLogin
    | SubmitLoginSuccess
    | SubmitLoginError
    | GetUser
    | GetUserSuccess
    | GetUserError;

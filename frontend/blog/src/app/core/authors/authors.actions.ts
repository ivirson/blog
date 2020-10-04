import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_AUTHORS = '[AUTHORS] Get authors',
  GET_AUTHORS_SUCCESS = '[AUTHORS] Get authors success',
  GET_AUTHORS_ERROR = '[AUTHORS] Get authors error'
}

export class GetAuthors implements Action {
  readonly type = ActionTypes.GET_AUTHORS;
  constructor(public payload?: any) {}
}

export class GetAuthorsSuccess implements Action {
  readonly type = ActionTypes.GET_AUTHORS_SUCCESS;
  constructor(public payload?: any) {}
}

export class GetAuthorsError implements Action {
  readonly type = ActionTypes.GET_AUTHORS_ERROR;
  constructor(public payload?: any) {}
}

export type AuthorsActions =
    | GetAuthors
    | GetAuthorsSuccess
    | GetAuthorsError;

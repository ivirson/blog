import { User } from '../../models/user.model';
import { ActionTypes, AuthorsActions } from './authors.actions';

export interface AuthorsState {
    authors: User[] | null;
    loading: boolean;
    error: any;
}

export const authorsState: AuthorsState = {
    authors: null,
    loading: false,
    error: null
};

export function authorsReducer(state = authorsState, action: AuthorsActions) {
    switch (action.type) {
        case ActionTypes.GET_AUTHORS:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.GET_AUTHORS_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              authors: action.payload
            };
        }

        case ActionTypes.GET_AUTHORS_ERROR:
        {
            return {
              ...state,
              loading: false,
              error: action.payload
            };
        }

        default:
            return state;
    }

}

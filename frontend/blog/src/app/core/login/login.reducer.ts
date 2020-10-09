import { AuthUser } from './../../models/auth-user.model';
import { ActionTypes, LoginActions } from './login.actions';

export interface LoginState {
    user: AuthUser | null;
    loading: boolean;
    error: any;
}

export const loginState: LoginState = {
    user: null,
    loading: false,
    error: null
};

export function loginReducer(state = loginState, action: LoginActions) {
    switch (action.type) {
        case ActionTypes.SUBMIT_LOGIN:
        {
            return {
              ...state,
              loading: true
            };
        }

        case ActionTypes.SUBMIT_LOGIN_SUCCESS:
        {
            return {
              ...state,
              loading: false,
              user: action.payload
            };
        }

        case ActionTypes.SUBMIT_LOGIN_ERROR:
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

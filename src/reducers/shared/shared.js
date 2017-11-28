import { combineReducers } from 'redux';
import { isAuthenticating } from './isAuthenticating';
import { token } from './token';
import { errors } from './errors';
import { email} from './authentificatedUser';

export const shared = combineReducers({
    isAuthenticating,
    token,
    errors,
    email,
});

import { push } from 'connected-react-router';
import {
    dismissError, loggedUser,
    receiveValidToken
} from './actionCreators';
import {
    failAuthentication,
    startAuthentication
} from './actionCreators';
import * as keys from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import { USER_EMAIL } from '../../constants/api';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FAILED_AUTHENTICATION_MESSAGE
} from '../../constants/uiConstants';

export const authenticateUser = (destinationLocation, loginId) =>
    (dispatch) => {
        dispatch(startAuthentication());

        const login = loginId;
        return fetchAuthToken(loginId)
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(loggedUser(loginId));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
                localStorage.setItem(keys.LOGGED_USER_EMAIL, JSON.stringify(loginId));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };

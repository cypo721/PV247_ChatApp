import * as actionTypes from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const receiveValidToken = (token) => ({
    type: actionTypes.SHARED_RECEIVE_TOKEN,
    payload: {
        token,
    }
});

export const loggedUser = (email) => ({
    type: actionTypes.LOGGED_USER,
    payload: {
        email,
    }
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_INVALIDATE_TOKEN,
});

export const startAuthentication = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_STARTED,
});

export const startRegistration = () => ({
    type: actionTypes.SHARED_REGISTRATION_STARTED,
});

export const dismissError = (errorId) => ({
    type: actionTypes.SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});


export const startFetchingData = () => ({
    type: actionTypes.START_FETCHING_APP_DATA,
});

export const receiveAppData = (application) => ({
    type: actionTypes.APP_DATA,
    payload: {
        application,
    }
});

export const failAuthentication = errorActionFactory(actionTypes.SHARED_AUTHENTICATION_FAILED);
export const failRegistration = errorActionFactory(actionTypes.SHARED_REGISTRATION_FAILED);

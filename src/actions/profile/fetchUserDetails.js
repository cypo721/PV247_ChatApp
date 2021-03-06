import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails,
    startFetchingProfileAvatar
} from './actionCreators';
import {
    createApiUserUri
} from '../../constants/api';
import {
    failAuthentication,
    invalidateToken
} from '../shared/actionCreators';
import { convertFromServerDetails } from '../../utils/api/conversions/profileDetails';
import {
    EXPIRED_AUTHENTICATION_MESSAGE,
    FAILED_FETCH_DETAILS_MESSAGE
} from '../../constants/uiConstants';
import {LOGGED_USER_EMAIL} from '../../constants/localStorageKeys';

export const fetchUserDetailsFactory = ({ fetchReceive, fetchUserAvatar }) => () =>
    (dispatch, getState) => {
        dispatch(startFetchingProfileDetails());
        dispatch(startFetchingProfileAvatar());

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(getState().shared.email || localStorage.getItem(LOGGED_USER_EMAIL));

        return fetchReceive(requestUri, authToken)
            .then((serverDetails) => dispatch(updateProfileDetails(convertFromServerDetails(serverDetails))))
            .then(({ payload: {details: { avatarId } = {} } = {} }) => avatarId && dispatch(fetchUserAvatar(avatarId)))
            .catch((error) => {
                if (error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
                }
                throw error;
            })
            .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)));
    };

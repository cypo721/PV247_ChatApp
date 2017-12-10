import {invalidateToken, removeData} from './actionCreators';
import * as keys from '../../constants/localStorageKeys';

export const logoutUser = () =>
    (dispatch) => {
        localStorage.removeItem(keys.SHARED_TOKEN);
        localStorage.removeItem(keys.SHARED_TOKEN_TIMESTAMP);
        localStorage.removeItem(keys.LOGGED_USER_EMAIL);
        localStorage.removeItem('actualChannelId');

        dispatch(removeData());
        dispatch(invalidateToken());
    };

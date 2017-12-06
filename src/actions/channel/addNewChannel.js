import {dismissError, receiveAppData} from '../shared/actionCreators';
import {FAILED_ADDING_CHANNEL, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {failedAddingChannel, startCreatingChannel} from './actionCreators';
import {uploadChannel} from './uploadChannel';

export const addNewChannel = (channel) =>
    (dispatch, getState) => {

        dispatch(startCreatingChannel());

        const authToken = getState().shared.token;

        return uploadChannel(authToken, getState().shared.email || localStorage.getItem('loggedUserEmail'), channel)
            .then( (aplication) => {
                dispatch(receiveAppData(aplication));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedAddingChannel(FAILED_ADDING_CHANNEL, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };

import {removeChannel} from './removeChannel';
import {dismissError, receiveAppData} from '../shared/actionCreators';
import {failedRemovingChannel, startRemovingChannel} from './actionCreators';
import {FAILED_REMOVING_CHANNEL, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';

export const removeSelectedChannel = (channel) =>
    (dispatch, getState) => {

        dispatch(startRemovingChannel());

        const authToken = getState().shared.token;

        return removeChannel(authToken, channel)
            .then( (aplication) => {
                dispatch(receiveAppData(aplication));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedRemovingChannel(FAILED_REMOVING_CHANNEL, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
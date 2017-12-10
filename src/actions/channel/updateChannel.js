import {dismissError, receiveAppData} from '../shared/actionCreators';
import {
    FAILED_UPDATING_CHANNEL,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {failedUpdatingChannel, startUpdatingChannel} from './actionCreators';
import {convertFromServerData} from './applicationData';
import {updateExistingChannel} from './updateExistingChannel';

export const updateChannel = (channel, newName, users) =>
    (dispatch, getState) => {

        dispatch(startUpdatingChannel());

        const authToken = getState().shared.token;

        return updateExistingChannel(authToken, channel, newName, users)
            .then( (aplication) => {
                const convertedData = convertFromServerData(aplication);
                dispatch(receiveAppData(convertedData));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedUpdatingChannel(FAILED_UPDATING_CHANNEL, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };

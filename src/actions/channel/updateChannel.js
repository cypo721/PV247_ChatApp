import {dismissError, receiveAppData} from '../shared/actionCreators';
import {
    FAILED_UPDATING_CHANNEL,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {channelSelection, failedUpdatingChannel, finishEditingChannel, startUpdatingChannel} from './actionCreators';
import {convertFromServerData} from './applicationData';
import {updateExistingChannel} from './api/updateExistingChannel';

export const updateChannel = (newName, users) =>
    (dispatch, getState) => {

        dispatch(startUpdatingChannel());

        const authToken = getState().shared.token;
        const parsedUsers = users.split(',').map( u => u.trim());
        const allUsers = getState().application.actualChannel.customData.users.concat(parsedUsers || []);
        newName = newName || getState().application.actualChannel.name;

        return updateExistingChannel(authToken, getState().application.actualChannel, newName, allUsers)
            .then( (aplication) => {
                const convertedData = convertFromServerData(aplication);
                dispatch(receiveAppData(convertedData));
                dispatch(finishEditingChannel());
                dispatch(channelSelection(getState().application.actualChannel));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedUpdatingChannel(FAILED_UPDATING_CHANNEL, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };

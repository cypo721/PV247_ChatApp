//import {removeChannel} from './api/removeChannel';
import {dismissError, receiveAppData} from '../shared/actionCreators';
import {failedRemovingChannel, startRemovingChannel, unselectChannel} from './actionCreators';
import {FAILED_REMOVING_CHANNEL, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';

export const removeSelectedChannelFactory = ({removeChannel, convertFromServerData}) => (channel) =>
    (dispatch, getState) => {

        dispatch(startRemovingChannel());

        const authToken = getState().shared.token;
        const unmark = channel.id === getState().application.actualChannel.id;

        return removeChannel(authToken, channel)
            .then( (aplication) => {
                const convertedData = convertFromServerData(aplication);
                dispatch(receiveAppData(convertedData));
                if (unmark) {
                    dispatch(unselectChannel());
                }
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedRemovingChannel(FAILED_REMOVING_CHANNEL, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
import {dismissError, receiveAppData} from '../shared/actionCreators';
import {
    FAILED_ADDING_CHANNEL, FAILED_ADDING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {failedAddingMessage, startCreatingMessage} from './actionCreators';
import {uploadMessage} from './uploadMessage';

export const addNewMessage = (message) =>
    (dispatch, getState) => {

        dispatch(startCreatingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().shared.channel;

        return uploadMessage(authToken, message, actualChannel)
            .then( (newMessage) => {
                dispatch(addNewMessage(newMessage));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedAddingMessage(FAILED_ADDING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
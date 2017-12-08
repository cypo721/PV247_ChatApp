import {dismissError} from '../shared/actionCreators';
import {
    FAILED_UPDATING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {
    failedUpdatingMessage,
    startUpdatingMessage, updateMessage
} from './actionCreators';
import {convertNewMessage} from './messageData';
import {votingMessage} from './votingMessage';

export const updateVotesOfMessage = (message, vote) =>
    (dispatch, getState) => {

        dispatch(startUpdatingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().application.actualChannel.id;
        if (vote == 1) {
            message.customData.up.push(localStorage.getItem('loggedUserEmail'));
        }
        if (vote == -1) {
            message.customData.down.push(localStorage.getItem('loggedUserEmail'));
        }
        if (vote == 0) {
            message.customData.up = message.customData.up.filter(u => u !== localStorage.getItem('loggedUserEmail'));
            message.customData.down = message.customData.down.filter( u => u !== localStorage.getItem('loggedUserEmail'));
        }
        const index = getState().application.messages.indexOf(message);

        return votingMessage(authToken, actualChannel, message)
            .then( (updatedMessage) => {
                const convertedMsg = convertNewMessage(updatedMessage);
                dispatch(updateMessage(convertedMsg, index));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedUpdatingMessage(FAILED_UPDATING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
import {dismissError} from '../shared/actionCreators';
import {
    FAILED_REMOVING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {
    failedRemovingMessage, removeMessage,
    startRemovingMessage
} from './actionCreators';
import {deleteMessage} from './deleteMessage';

export const deleteSelectedMessage = (messageId) =>
    (dispatch, getState) => {

        dispatch(startRemovingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().application.actualChannel.id;

        return deleteMessage(authToken, messageId, actualChannel)
            .then( (response) => {
                dispatch(removeMessage(messageId));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedRemovingMessage(FAILED_REMOVING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
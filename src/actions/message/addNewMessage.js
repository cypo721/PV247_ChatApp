import {dismissError} from '../shared/actionCreators';
import {
    FAILED_ADDING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {addCreatedMessage, failedAddingMessage, startCreatingMessage} from './actionCreators';
import {uploadMessage} from './uploadMessage';

export const addNewMessage = (message) =>
    (dispatch, getState) => {

        dispatch(startCreatingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().application.actualChannel.id;

        return uploadMessage(authToken, message, actualChannel)
            .then( (newMessage) => {
                dispatch(addCreatedMessage(newMessage));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedAddingMessage(FAILED_ADDING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
import {dismissError} from '../shared/actionCreators';
import {
    FAILED_ADDING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {addCreatedMessage, failedAddingMessage, startCreatingMessage} from './actionCreators';
//import {uploadMessage} from './api/uploadMessage';
//import {convertNewMessage} from '../../utils/api/conversions/messageData';
import {LOGGED_USER_EMAIL} from '../../constants/localStorageKeys';

export const addNewMessageFactory = ({uploadMessage, convertNewMessage}) => (message) =>
    (dispatch, getState) => {

        dispatch(startCreatingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().application.actualChannel.id;
        const avatarUri = getState().profile.avatarUri;
        const nick = getState().profile.details.fullName || localStorage.getItem(LOGGED_USER_EMAIL);

        return uploadMessage(authToken, message, actualChannel, avatarUri, nick)
            .then( (newMessage) => {
                const convertedMsg = convertNewMessage(newMessage);
                dispatch(addCreatedMessage(convertedMsg));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedAddingMessage(FAILED_ADDING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
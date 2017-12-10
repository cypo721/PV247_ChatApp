import {dismissError} from '../shared/actionCreators';
import {
    FAILED_UPDATING_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import {
    downvote,
    failedUpdatingMessage, removeVote,
    startUpdatingMessage, upvote
} from './actionCreators';
import {convertNewMessage} from './messageData';
import {votingMessage} from './votingMessage';
import {LOGGED_USER_EMAIL} from '../../constants/localStorageKeys';

export const updateVotesOfMessage = (message, vote) =>
    (dispatch, getState) => {

        dispatch(startUpdatingMessage());

        const authToken = getState().shared.token;
        const actualChannel = getState().application.actualChannel.id;
        var up = message.customData.up;
        var down = message.customData.down;

        if (vote == 1) {
            up = up.concat(localStorage.getItem(LOGGED_USER_EMAIL));
        }
        if (vote == -1) {
            down = down.concat(localStorage.getItem(LOGGED_USER_EMAIL));
        }
        if (vote == 0) {
            up = up.filter(u => u !== localStorage.getItem(LOGGED_USER_EMAIL));
            down = down.filter( u => u !== localStorage.getItem(LOGGED_USER_EMAIL));
        }


        return votingMessage(authToken, actualChannel, message, up, down)
            .then( (updatedMessage) => {
                const convertedMsg = convertNewMessage(updatedMessage);
                //dispatch(updateMessage(convertedMsg, index));
                switch(vote){
                    case 1:
                        dispatch(upvote(convertedMsg, localStorage.getItem(LOGGED_USER_EMAIL)));
                        break;
                    case -1:
                        dispatch(downvote(convertedMsg,localStorage.getItem(LOGGED_USER_EMAIL)));
                        break;
                    case 0:
                        dispatch(removeVote(convertedMsg, localStorage.getItem(LOGGED_USER_EMAIL)));
                        break;
                    default:
                        null;
                }
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedUpdatingMessage(FAILED_UPDATING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
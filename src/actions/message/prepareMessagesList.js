import {markSelectedChannel} from '../channel/actionCreators';
import {loadMessages} from './loadMessagesOfChannel';
import {dismissError} from '../shared/actionCreators';
import {FAILED_FETCHING_MESSAGE, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {failedFetchingMessages, loadMessagesOfChannel} from './actionCreators';

export const prepareMessagesList = (channel) =>
    (dispatch, getState) => {

        dispatch(markSelectedChannel(channel));

        const authToken = getState().shared.token;

        return loadMessages(authToken, channel.id)
            .then( (messages) => {
                dispatch(loadMessagesOfChannel(messages));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedFetchingMessages(FAILED_FETCHING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
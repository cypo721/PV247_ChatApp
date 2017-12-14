import {channelSelection, markSelectedChannel} from '../channel/actionCreators';
import {loadMessages} from './api/loadMessagesOfChannel';
import {dismissError} from '../shared/actionCreators';
import {FAILED_FETCHING_MESSAGE, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {failedFetchingMessages, loadMessagesOfChannel} from './actionCreators';
import {convertFromServerMessages} from '../../utils/api/conversions/messageData';

export const prepareMessagesList = (channel) =>
    (dispatch, getState) => {
        dispatch(channelSelection(channel));
        dispatch(markSelectedChannel(channel));

        const authToken = getState().shared.token;
        localStorage.setItem('actualChannelId', channel.id);

        return loadMessages(authToken, channel.id)
            .then( (messages) => {
                const convertedMessages = convertFromServerMessages(messages);
                dispatch(loadMessagesOfChannel(convertedMessages));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failedFetchingMessages(FAILED_FETCHING_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
import {
    MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DOWNVOTE, MESSAGE_FETCH,
    MESSAGE_UPVOTE, MESSAGES_FETCH, START_CREATING_MESSAGE
} from '../../constants/actionTypes';
import {errorActionFactory} from '../../utils/errorActionFactory';
import * as actionTypes from '../../constants/actionTypes';
import {messages} from '../../reducers/message/channelMessages';

export const removeMessage = () => ({
    type: MESSAGE_DELETE,
});

export const addNewMessage = (message) => ({
    type: MESSAGE_CREATE,
    payload: {
        message
    }
});

export const messageUpvote = () => ({
    type: MESSAGE_UPVOTE,
});

export const messageDownvote = () => ({
    type: MESSAGE_DOWNVOTE,
});

export const startCreatingMessage = () => ({
    type: START_CREATING_MESSAGE,
});

export const startRemovingMessage = () => ({
    type: START_CREATING_MESSAGE,
});

export const loadMessagesOfChannel = (messages) =>({
    type: MESSAGES_FETCH,
    payload: {
        messages,
    }
});

export const failedAddingMessage = errorActionFactory(actionTypes.MESSAGE_ADDING_FAILED);
export const failedFetchingMessages = errorActionFactory(actionTypes.MESSAGE_FETCHING_FAILED);
export const failedRemovingMessage = errorActionFactory(actionTypes.CHANNEL_REMOVING_FAILED);
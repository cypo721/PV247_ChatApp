import {
    MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DOWNVOTE, MESSAGE_REMOVE_VOTE, MESSAGE_UPDATE, MESSAGE_UPVOTE,
    MESSAGES_FETCH, START_CREATING_MESSAGE, START_MESSAGE_UPDATE, START_REMOVING_MESSAGE
} from '../../constants/actionTypes';
import {errorActionFactory} from '../../utils/errorActionFactory';
import * as actionTypes from '../../constants/actionTypes';

export const removeMessage = (messageId) => ({
    type: MESSAGE_DELETE,
    payload: {
        messageId
    }
});

export const addCreatedMessage = (message) => ({
    type: MESSAGE_CREATE,
    payload: {
        message
    }
});

export const updateMessage = (message, index) => ({
    type: MESSAGE_UPDATE,
    payload: {
        message,
        index
    }
});

export const upvote = (message, email) => ({
    type: MESSAGE_UPVOTE,
    payload: {
        message,
        email
    }
});

export const downvote = (message, email) => ({
    type: MESSAGE_DOWNVOTE,
    payload: {
        message,
        email
    }
});

export const removeVote = (message, email) => ({
    type: MESSAGE_REMOVE_VOTE,
    payload: {
        message,
        email
    }
});

export const startUpdatingMessage = () => ({
    type: START_MESSAGE_UPDATE,
});

export const startCreatingMessage = () => ({
    type: START_CREATING_MESSAGE,
});

export const startRemovingMessage = () => ({
    type: START_REMOVING_MESSAGE,
});

export const loadMessagesOfChannel = (messages) =>({
    type: MESSAGES_FETCH,
    payload: {
        messages,
    }
});

export const failedAddingMessage = errorActionFactory(actionTypes.MESSAGE_ADDING_FAILED);
export const failedFetchingMessages = errorActionFactory(actionTypes.MESSAGE_FETCHING_FAILED);
export const failedRemovingMessage = errorActionFactory(actionTypes.MESSAGE_REMOVING_FAILED);
export const failedUpdatingMessage = errorActionFactory(actionTypes.MESSAGE_UPDATING_FAILED);
import {
    MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DOWNVOTE, MESSAGE_FETCH,
    MESSAGE_UPVOTE
} from '../../constants/actionTypes';

export const messageFetch = () => ({
    type: MESSAGE_FETCH,
});

export const removeMessage = () => ({
    type: MESSAGE_DELETE,
});

export const addNewMessage = () => ({
    type: MESSAGE_CREATE,
});

export const messageUpvote = () => ({
    type: MESSAGE_UPVOTE,
});

export const messageDownvote = () => ({
    type: MESSAGE_DOWNVOTE,
});
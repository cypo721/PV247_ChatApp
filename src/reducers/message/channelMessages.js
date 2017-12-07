import {MESSAGE_CREATE, MESSAGE_DELETE, MESSAGES_FETCH} from '../../constants/actionTypes';

export const messages = (prevState = [], action) => {
    switch (action.type) {
        case MESSAGES_FETCH:
            return action.payload.messages.reverse();
        case MESSAGE_CREATE:
            return prevState.concat(action.payload.message);
        case MESSAGE_DELETE:
            return prevState.filter(msg => msg.id !== action.payload.messageId);
        default:
            return prevState;
    }
};
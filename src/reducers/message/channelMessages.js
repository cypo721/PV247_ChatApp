import {MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_UPDATE, MESSAGES_FETCH} from '../../constants/actionTypes';

export const messages = (prevState = [], action) => {
    switch (action.type) {
        case MESSAGES_FETCH:
            return action.payload.messages.reverse();
        case MESSAGE_CREATE:
            return prevState.concat(action.payload.message);
        case MESSAGE_DELETE:
            return prevState.filter(msg => msg.id !== action.payload.messageId);
        case MESSAGE_UPDATE:
            prevState.slice(action.payload.index, 1);
            prevState[action.payload.index] = action.payload.message;
            return prevState;
        default:
            return prevState;
    }
};
import {MESSAGES_FETCH} from '../../constants/actionTypes';

export const messages = (prevState = [], action) => {
    switch (action.type) {
        case MESSAGES_FETCH:
            return action.payload.messages;
        default:
            return prevState;
    }
};
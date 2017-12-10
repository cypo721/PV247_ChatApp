import {
    MESSAGE_CREATE, MESSAGE_DELETE, MESSAGE_DOWNVOTE, MESSAGE_REMOVE_VOTE, MESSAGE_UPDATE, MESSAGE_UPVOTE,
    MESSAGES_FETCH
} from '../../constants/actionTypes';

export const messages = (prevState = [], action) => {
    switch (action.type) {
        case MESSAGES_FETCH:
            return action.payload.messages.reverse();
        case MESSAGE_CREATE:
            return prevState.concat(action.payload.message);
        case MESSAGE_DELETE:
            return prevState.filter(msg => msg.id !== action.payload.messageId);
        case MESSAGE_UPDATE:
            // prevState.slice(action.payload.index, 1);
            // prevState[action.payload.index] = action.payload.message;
            return prevState.forEach(msg => {
                if (msg.id !== action.payload.message.id) {
                    return msg;
                } else {
                    return action.payload.message;
                }
            });
        case MESSAGE_UPVOTE:
            //return prevState;
            return prevState.map( (msg) => {
                if(msg.id === action.payload.message.id) {
                    return {id: msg.id,
                        value: msg.value,
                        createdAt: msg.createdAt,
                        createdBy: msg.createdBy,
                        updatedBy: msg.updatedBy,
                        updatedAt: msg.updatedAt,
                        customData: {
                            uri: msg.customData.uri,
                            nick: msg.customData.nick,
                            up: msg.customData.up.concat(action.payload.email),
                            down: msg.customData.down
                        }
                    };
                } else {
                    return msg;
                }
            });
        case MESSAGE_DOWNVOTE:
            return prevState.map( (msg) => {
                if(msg.id === action.payload.message.id) {
                    return {id: msg.id,
                        value: msg.value,
                        createdAt: msg.createdAt,
                        createdBy: msg.createdBy,
                        updatedBy: msg.updatedBy,
                        updatedAt: msg.updatedAt,
                        customData: {
                            uri: msg.customData.uri,
                            nick: msg.customData.nick,
                            up: msg.customData.up,
                            down: msg.customData.down.concat(action.payload.email),
                        }
                    };
                } else {
                    return msg;
                }
            });
        case MESSAGE_REMOVE_VOTE:
            return prevState.map( (msg) => {
                if(msg.id === action.payload.message.id) {
                    return {id: msg.id,
                        value: msg.value,
                        createdAt: msg.createdAt,
                        createdBy: msg.createdBy,
                        updatedBy: msg.updatedBy,
                        updatedAt: msg.updatedAt,
                        customData: {
                            uri: msg.customData.uri,
                            nick: msg.customData.nick,
                            up: msg.customData.up.filter( (u) => u !== action.payload.email),
                            down: msg.customData.down.filter( (u) => u !== action.payload.email)
                        }
                    };
                } else {
                    return msg;
                }
            });

        default:
            return prevState;
    }
};
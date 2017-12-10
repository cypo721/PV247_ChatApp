import {MARK_SELECTED_CHANNEL, REMOVE_DATA} from '../../constants/actionTypes';


export const actualChannel = (prevState = null, action) => {
    switch (action.type) {
        case MARK_SELECTED_CHANNEL:
            return action.payload.channel;
        case REMOVE_DATA:
            return null;
        default:
            return prevState;
    }
};

import {MARK_SELECTED_CHANNEL, REMOVE_DATA, UNMARK_SELECTED_CHANNEL} from '../../constants/actionTypes';


export const actualChannel = (prevState = null, action) => {
    switch (action.type) {
        case MARK_SELECTED_CHANNEL:
            return action.payload.channel;
        case REMOVE_DATA:
            return null;
        case UNMARK_SELECTED_CHANNEL:
            return null;
        default:
            return prevState;
    }
};

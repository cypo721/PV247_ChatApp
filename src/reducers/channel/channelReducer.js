import {MARK_SELECTED_CHANNEL} from '../../constants/actionTypes';


export const actualChannel = (prevState = null, action) => {
    switch (action.type) {
        case MARK_SELECTED_CHANNEL:
            return action.payload.channel;
        default:
            return prevState;
    }
};

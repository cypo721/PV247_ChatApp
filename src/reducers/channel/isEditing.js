import {FINISH_EDITING_CHANNEL, START_EDITING_CHANNEL} from '../../constants/actionTypes';


export const isEditingChannel = (prevState = false, action) => {
    switch (action.type) {
        case START_EDITING_CHANNEL:
            return true;
        case FINISH_EDITING_CHANNEL:
            return false;
        default:
            return prevState;
    }
};

import { PROFILE_UPDATE_DETAILS } from '../../constants/actionTypes';

export const details = (prevState = null, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_DETAILS:
            return action.payload.details;

        default:
            return prevState;
    }
};

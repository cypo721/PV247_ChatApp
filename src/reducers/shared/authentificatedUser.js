import {LOGGED_USER} from '../../constants/actionTypes';

export const email = (prevState = null, action) => {
    switch (action.type) {
        case LOGGED_USER:
            return action.payload.email;
        default:
            return prevState;
    }
};
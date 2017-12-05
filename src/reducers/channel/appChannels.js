
import {APP_DATA} from '../../constants/actionTypes';

export const appChannels = (prevState = null, action) => {
    switch (action.type) {
        case APP_DATA:
            return action.payload.application;

        default:
            return prevState;
    }
};
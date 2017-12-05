
import {APP_DATA} from '../../constants/actionTypes';

const initialState = {
    channels: [],
    id: ''
}

export const appChannels = (prevState = initialState, action) => {
    switch (action.type) {
        case APP_DATA:
            return action.payload.application;

        default:
            return prevState;
    }
};
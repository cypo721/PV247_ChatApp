import {CHANNEL_FETCH} from '../../constants/actionTypes';

const defaultStore = [];

export default function channelReducer(store = defaultStore, action) {
    switch (action.type) {
        case CHANNEL_FETCH: {
            return [1,2,3,4,5];
        }
        default:
            return store;
    }
}
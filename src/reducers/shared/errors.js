import * as Immutable from 'immutable';
import {
    SHARED_DISMISS_ERROR,
    SHARED_AUTHENTICATION_FAILED,
    PROFILE_FETCHING_FAILED,
    PROFILE_UPLOADING_FAILED,
    PROFILE_AVATAR_UPLOADING_FAILED,
    PROFILE_AVATAR_FETCHING_FAILED, MESSAGE_ADDING_FAILED, MESSAGE_REMOVING_FAILED, MESSAGE_FETCHING_FAILED,
    CHANNEL_ADDING_FAILED, CHANNEL_REMOVING_FAILED, CHANNEL_UPDATING_FAILED, SHARED_REGISTRATION_FAILED,
} from '../../constants/actionTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

export const errors = (previousState = Immutable.OrderedMap(), action) => {
    switch (action.type) {
        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_REGISTRATION_FAILED:
        case PROFILE_FETCHING_FAILED:
        case PROFILE_UPLOADING_FAILED:
        case PROFILE_AVATAR_UPLOADING_FAILED:
        case PROFILE_AVATAR_FETCHING_FAILED:
        case MESSAGE_ADDING_FAILED:
        case MESSAGE_FETCHING_FAILED:
        case MESSAGE_REMOVING_FAILED:
        case CHANNEL_ADDING_FAILED:
        case CHANNEL_REMOVING_FAILED:
        case CHANNEL_UPDATING_FAILED:
            return previousState.set(action.payload.error.id, { ...action.payload.error });

        case SHARED_DISMISS_ERROR:
            return previousState.delete(action.payload.errorId);

        case LOCATION_CHANGE:
            return previousState.clear();

        default:
            return previousState;
    }
};

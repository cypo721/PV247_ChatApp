import {
    CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_FETCH, CHANNEL_INVATE_USER,
    CHANNEL_UPDATE_NAME, START_CREATING_CHANNEL
} from '../../constants/actionTypes';
import * as actionTypes from '../../constants/actionTypes';
import {errorActionFactory} from '../../utils/errorActionFactory';

export const channelFetch = () => ({
    type: CHANNEL_FETCH,
});

export const channelUpdate = (channel) => ({
    type: CHANNEL_UPDATE_NAME,
    payload: {
        channel
    }
});

export const removeChannel = () => ({
    type: CHANNEL_DELETE,
});

export const addNewChannel = () => ({
    type: CHANNEL_CREATE,
});

export const invateUser = () => ({
    type: CHANNEL_INVATE_USER,
});

export const startCreatingChannel = () => ({
    type: START_CREATING_CHANNEL,
});

export const failedAddingChannel = errorActionFactory(actionTypes.CHANNEL_ADDING_FAILED);
export const failedRemovingChannel = errorActionFactory(actionTypes.CHANNEL_REMOVING_FAILED);
export const failedUpdatingChannel = errorActionFactory(actionTypes.CHANNEL_UPDATING_FAILED);
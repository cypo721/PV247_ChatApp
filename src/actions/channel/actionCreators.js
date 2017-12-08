import {
    CHANNEL_INVATE_USER, CHANNEL_UPDATE_NAME, CHANNEL_UPDATE_SELECTION, MARK_SELECTED_CHANNEL,
    START_CREATING_CHANNEL, START_REMOVING_CHANNEL
} from '../../constants/actionTypes';
import * as actionTypes from '../../constants/actionTypes';
import {errorActionFactory} from '../../utils/errorActionFactory';

export const channelUpdate = (channel) => ({
    type: CHANNEL_UPDATE_NAME,
    payload: {
        channel
    }
});

export const channelSelection = (channel) => ({
    type: CHANNEL_UPDATE_SELECTION,
    payload: {
        channel
    }
});

export const invateUser = () => ({
    type: CHANNEL_INVATE_USER,
});

export const startCreatingChannel = () => ({
    type: START_CREATING_CHANNEL,
});

export const startRemovingChannel = () => ({
    type: START_REMOVING_CHANNEL,
});

export const markSelectedChannel = (channel) => ({
    type: MARK_SELECTED_CHANNEL,
    payload: {
        channel
    }
});

export const failedAddingChannel = errorActionFactory(actionTypes.CHANNEL_ADDING_FAILED);
export const failedRemovingChannel = errorActionFactory(actionTypes.CHANNEL_REMOVING_FAILED);
export const failedUpdatingChannel = errorActionFactory(actionTypes.CHANNEL_UPDATING_FAILED);
import {
    CHANNEL_INVATE_USER, CHANNEL_UPDATE_NAME, CHANNEL_UPDATE_SELECTION, FINISH_EDITING_CHANNEL, MARK_SELECTED_CHANNEL,
    START_CREATING_CHANNEL, START_EDITING_CHANNEL, START_REMOVING_CHANNEL, START_UPDATING_CHANNEL,
    UNMARK_SELECTED_CHANNEL
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

export const startUpdatingChannel = () => ({
    type: START_UPDATING_CHANNEL,
});

export const startEditingChannel = () => ({
    type: START_EDITING_CHANNEL,
});

export const finishEditingChannel = () => ({
    type: FINISH_EDITING_CHANNEL,
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

export const unselectChannel = () => ({
    type: UNMARK_SELECTED_CHANNEL,
});

export const failedAddingChannel = errorActionFactory(actionTypes.CHANNEL_ADDING_FAILED);
export const failedRemovingChannel = errorActionFactory(actionTypes.CHANNEL_REMOVING_FAILED);
export const failedUpdatingChannel = errorActionFactory(actionTypes.CHANNEL_UPDATING_FAILED);
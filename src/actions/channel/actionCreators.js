import {
    CHANNEL_CREATE, CHANNEL_DELETE, CHANNEL_FETCH, CHANNEL_INVATE_USER,
    CHANNEL_UPDATE_NAME
} from '../../constants/actionTypes';

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
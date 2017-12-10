import {APP_DATA, CHANNEL_UPDATE_SELECTION} from '../../constants/actionTypes';

const initialState = {
    channels: [],
    id: ''
};

export const appChannels = (prevState = initialState, action) => {
    switch (action.type) {
        case APP_DATA:
            return action.payload.application;
        case CHANNEL_UPDATE_SELECTION:
            return {
                id : prevState.id,
                channels: prevState.channels.map((ch) => ({
                    id: ch.id,
                    name: ch.name,
                    customData: ch.customData,
                    isSelected: ch.id === action.payload.channel.id
                }))
            };
        default:
            return prevState;
    }
};
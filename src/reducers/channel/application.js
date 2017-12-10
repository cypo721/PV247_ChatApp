import {combineReducers} from 'redux';
import {appChannels} from './appChannels';
import {messages} from '../message/channelMessages';
import {actualChannel} from './channelReducer';
import {isEditingChannel} from './isEditing';

export const application = combineReducers({
    appChannels,
    messages,
    actualChannel,
    isEditingChannel
});
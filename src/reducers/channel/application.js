import {combineReducers} from 'redux';
import {appChannels} from './appChannels';
import {messages} from '../message/channelMessages';
import {actualChannel} from './channelReducer';

export const application = combineReducers({
    appChannels,
    messages,
    actualChannel
});
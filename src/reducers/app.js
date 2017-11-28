import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import channel  from './channel/channelReducer';
import { shared } from './shared/shared';

export const app = combineReducers({
    channel,
    shared,
    form,
});

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import channel  from './channel/channelReducer';
import { shared } from './shared/shared';
import { profile } from './profile/profile';

export const app = combineReducers({
    channel,
    shared,
    form,
    profile,
});

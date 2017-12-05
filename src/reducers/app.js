import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { shared } from './shared/shared';
import { profile } from './profile/profile';
import { application } from './channel/application';

export const app = combineReducers({
    application,
    shared,
    form,
    profile,

});

import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
    Route,
    Switch
} from 'react-router-dom';
import { LoginLayout } from './login/LoginLayout.jsx';
import { AuthenticatedRoute } from './app/AuthenticatedRoute.jsx';
import * as routes from '../constants/routes';
import channelContainer from '../containers/channelContainer.jsx';
import { Profile } from '../containers-redux/profile/Profile.jsx';
//import profileContainer from '../containers/profileContainer.jsx';

const LayoutSelector = ({ isAuthenticated }) => (
    <Switch>
        <Route path={routes.LOGIN} component={LoginLayout} />
        <AuthenticatedRoute path={routes.PROFILE} component={Profile} isAuthenticated={isAuthenticated}/>
        <AuthenticatedRoute path={routes.ROOT} component={channelContainer} isAuthenticated={isAuthenticated} />
    </Switch>
);

LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };
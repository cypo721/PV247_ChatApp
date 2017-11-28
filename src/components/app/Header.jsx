import React, {PureComponent} from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton.jsx';
import * as PropTypes from 'prop-types';

export default class Header extends PureComponent {
    constructor() {
        super();
    }

    static propTypes = {
        email: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="container-fluid" id="header-div">
                <nav className="navbar navbar-default">
                    <div className="navbar-text pull-right">Signed in as <a href="../PV247_ChatApp/app.html#/profile">{this.props.email}</a> <LogoutButton/></div>
                </nav>
            </div>
        );
    }
}
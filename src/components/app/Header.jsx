import React, {PureComponent} from 'react';
import { LogoutButton } from '../../containers-redux/app/LogoutButton.jsx';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
                <nav className="navbar navbar-default" style={{marginBottom: '0px'}}>
                    <div className="navbar-text pull-right">Signed in as <Link  to={'/profile'}>{this.props.email}</Link> <LogoutButton/></div>
                </nav>
            </div>
        );
    }
}
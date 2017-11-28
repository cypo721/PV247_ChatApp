import React, {Component} from 'react';
//import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import HeaderContainer from './headerContainer.jsx';
import ChannelContainer from './channelContainer.jsx';

export default class ChatLayoutContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HeaderContainer/>
                <ChannelContainer/>
            </div>
        );
    }
}

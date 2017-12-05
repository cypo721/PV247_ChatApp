import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import { channelFetch } from '../actions/channel/actionCreators';
import Header from '../components/app/Header.jsx';
import {Channels} from '../containers-redux/channels/Channels.jsx';

class ChannelContainer extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.channelFetch();
    }

    render() {
        return (
            <div>
                <Header email={this.props.email}/>
                <Channels/>
                <div style={msgStyle} >
                    test
                </div>
                {/*<button type="button" onClick={this.onClick}>fetch</button>*/}
                {/*{this.props.channels.map(channel => <p key={channel}>WOHOO {channel}</p>)}*/}
            </div>
        );
    }
}

ChannelContainer.propTypes = {
    //channels: PropTypes.arrayOf(PropTypes.number).isRequired,
    channelFetch: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        //channels: state.channel,
        email: state.shared.email || localStorage.getItem('loggedUserEmail')
    };
}

export default connect(mapStateToProps, {
    channelFetch
})(ChannelContainer);


const msgStyle = {
    width: '78%',
    backgroundColor: 'yellow',
    height: 'calc(100vh - 87px)',
};

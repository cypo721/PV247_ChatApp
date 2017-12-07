import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import Header from '../components/app/Header.jsx';
import {Channels} from '../containers-redux/channels/Channels.jsx';
import {Messages} from '../containers-redux/messages/MessagesList.jsx';
import {MessageInput} from '../containers-redux/messages/MessageInput.jsx';

class ChannelContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Header email={this.props.email}/>
                <div style={{ display: 'flex'}}>
                    <Channels/>
                    {JSON.stringify(this.props.actualChannel) == '{}' ?
                        <div className="text-center" style={msgStyle}>
                            <h1 style={{marginTop: '120px'}}> Welcome back! Choose channel to chat.</h1>
                        </div> :
                        <div style={msgStyle}>
                            <div style={{height: '90%'}}>
                                <Messages/>
                            </div>
                            <div style={{height: '10%'}}>
                                <MessageInput/>
                            </div>
                        </div>
                    }
                    {/*<button type="button" onClick={this.onClick}>fetch</button>*/}
                    {/*{this.props.channels.map(channel => <p key={channel}>WOHOO {channel}</p>)}*/}
                </div>
            </div>
        );
    }
}

ChannelContainer.propTypes = {
    email: PropTypes.string.isRequired,
    actualChannel: PropTypes.object
};

function mapStateToProps(state) {
    return {
        email: state.shared.email || localStorage.getItem('loggedUserEmail'),
        actualChannel: state.application.actualChannel || {},
    };
}

export default connect(mapStateToProps, {
})(ChannelContainer);


const msgStyle = {
    width: '78%',
    backgroundColor: 'ghostwhite',
    height: 'calc(100vh - 67px)',
    border: '1px',
};

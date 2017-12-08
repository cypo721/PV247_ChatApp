import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import Header from '../components/app/Header.jsx';
import {Channels} from '../containers-redux/channels/Channels.jsx';
import {Messages} from '../containers-redux/messages/MessagesList.jsx';
import {MessageInput} from '../containers-redux/messages/MessageInput.jsx';
import {Errors} from '../containers-redux/shared/Errors.jsx';

class ChannelContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Header email={this.props.email}/>
                <div style={{witdh: '100%', display: 'flex'}}>
                    <div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
                        <Errors key="errors" />
                    </div>
                </div>
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
    backgroundColor: 'lightgrey',
    height: 'calc(100vh - 68px)',
    border: '1px',
};

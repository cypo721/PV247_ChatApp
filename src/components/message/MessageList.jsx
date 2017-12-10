import * as React from 'react';
import * as PropTypes from 'prop-types';
import {LOGGED_USER_EMAIL} from '../../constants/localStorageKeys';
import {ChannelEdit} from '../../containers-redux/channels/ChannelEdit.jsx';

class Messages extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            createdBy: PropTypes.string.isRequired
        }).isRequired),
        onClickDelete: PropTypes.func.isRequired,
        onClickUpvote: PropTypes.func.isRequired,
        onClickDownvote: PropTypes.func.isRequired,
        onClickDeleteVote: PropTypes.func.isRequired,
        isEditingChannel: PropTypes.bool.isRequired,
    };

    // componentWillMount() {
    //     this.props.fetchData();
    // }


    render() {
        return (
            <div style={listDiv}>
                <div style={{display: this.props.isEditingChannel? '': 'none'}}>
                    <ChannelEdit/>
                </div>
                <div style={{display: this.props.isEditingChannel?'none': ''}}>
                    {this.props.messages.map( msg =>
                        <div style={msgDiv} key={msg.id}>
                            <div style={photoDiv}>
                                <img width={'30px'} height={'30px'} style={{borderRadius: '20px'}}
                                    src={msg.customData.uri}/></div>
                            <div style={{ width: '80%'}}>
                                <div><b>{msg.customData.nick} {new Date(msg.createdAt).toLocaleDateString()} {new Date(msg.createdAt).toLocaleTimeString()} - </b>
                                    Score:<b>{msg.customData.up.length - msg.customData.down.length}</b>
                                </div>
                                <div>{msg.value}</div>
                            </div>
                            <div style={{ float: 'right'}}>
                                <button style={{ display: (msg.createdBy === localStorage.getItem(LOGGED_USER_EMAIL))? '' : 'none'}}
                                    title="Delete message"
                                    className="btn btn-danger btn-xs"
                                    onClick={() => this.onClickDelete(msg.id)}
                                    hidden
                                ><span className="glyphicon glyphicon-trash"></span></button>

                                <button style={{ display: (msg.createdBy === localStorage.getItem(LOGGED_USER_EMAIL))? 'none' : ''}}
                                    title="Upvote"
                                    className="btn btn-info btn-xs"
                                    onClick={() => this.onClickUpvote(msg)}
                                    hidden
                                    disabled={ msg.customData.up.includes(localStorage.getItem(LOGGED_USER_EMAIL)) ||
                                        msg.customData.down.includes(localStorage.getItem(LOGGED_USER_EMAIL))}
                                ><span className="glyphicon glyphicon-thumbs-up"></span></button>

                                <button style={{ display: (msg.createdBy === localStorage.getItem(LOGGED_USER_EMAIL))? 'none' : ''}}
                                    title="Remove vote"
                                    className="btn btn-default btn-xs"
                                    onClick={() => this.onClickDeleteVote(msg)}
                                    hidden
                                ><span className="glyphicon glyphicon-remove-circle"></span></button>

                                <button style={{ display: (msg.createdBy === localStorage.getItem(LOGGED_USER_EMAIL))? 'none' : ''}}
                                    title="Downvote"
                                    className="btn btn-info btn-xs"
                                    onClick={() => this.onClickDownvote(msg)}
                                    hidden
                                    disabled={ msg.customData.up.includes(localStorage.getItem(LOGGED_USER_EMAIL)) ||
                                        msg.customData.down.includes(localStorage.getItem(LOGGED_USER_EMAIL))}
                                ><span className="glyphicon glyphicon-thumbs-down"></span></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    onClickDelete = (msgId) => {this.props.onClickDelete(msgId);}
    onClickUpvote = (msg) => {this.props.onClickUpvote(msg);}
    onClickDownvote = (msg) => {this.props.onClickDownvote(msg);}
    onClickDeleteVote = (msg) => {this.props.onClickDeleteVote(msg);}
}

export {Messages};

const listDiv = {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
};

const msgDiv = {
    width: '100%',
    margin: '5px',
    display: 'flex'
};

const photoDiv = {
    width: '7%',
    height: '100%',
    display: 'inline-block'
};
import * as React from 'react';
import * as PropTypes from 'prop-types';
import {LOGGED_USER_EMAIL} from '../../constants/localStorageKeys';
import {prepareMessagesList} from '../../actions/message/prepareMessagesList';

class Channels extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        channels: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired),
        fetchData: PropTypes.func.isRequired,
        fetchUser: PropTypes.func.isRequired,
        onSubmitChannel: PropTypes.func.isRequired,
        onClickDelete: PropTypes.func.isRequired,
        onSelectChannel: PropTypes.func.isRequired,
        startEditing: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.fetchData();
        this.props.fetchUser();
        this.setState(() => ({newChannel: ''}));
        this.setState(() => ({actaulChannel: {}}));
    }

    setActualChannel(channel) {
        this.setState(() => ({actualChannel: channel}));
    }

    onChangeHandler = (event) => { this.setState({newChannel: event.target.value}); };
    onClickHandler = (event) => {this.setState({actualChannel: event.target.id}); };

    render() {
        return (
            <div className="text-center" style={channelStyle}>
                <div>
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.newChannel}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div>
                    <button
                        className="btn btn-success"
                        onClick={this.onSubmitChannel}
                    >
                        Add new channel</button>
                </div>
                <h4 style={{ float: 'left'}}>Channels:</h4>
                <div style={{ marginTop: '40px'}}>
                    {this.props.channels.map(channel =>
                        <p className={channel.isSelected? 'active' : ''}key={channel.id}
                            style={{ display: channel.customData.users.includes(localStorage.getItem(LOGGED_USER_EMAIL))? 'flex' : 'none', justifyContent: 'space-between'}}
                            onClick={() => this.onSelectChannel(channel)}>
                            <span># {channel.name}</span>
                            <span style={{ width: '40px', display: 'flex'}}>
                                <button style={{ display: (channel.customData.owner === localStorage.getItem(LOGGED_USER_EMAIL))? '' : 'none'}}
                                    className="btn btn-danger btn-xs"
                                    onClick={() => this.onClickDelete(channel.id)}
                                    hidden
                                    title="Delete"
                                ><span className="glyphicon glyphicon-trash"></span></button>
                                <button style={{ display: (channel.customData.owner === localStorage.getItem(LOGGED_USER_EMAIL))? '' : 'none'}}
                                    className="btn btn-success btn-xs"
                                    onClick={this.onEditClick}
                                    hidden
                                    title="Edit"
                                ><span className="glyphicon glyphicon-edit"></span></button>
                            </span>
                        </p>)
                    }
                </div>
            </div>
        );
    }

    onSubmitChannel = () => {
        this.props.onSubmitChannel(this.state.newChannel);
        this.setState(() => ({newChannel: ''}));
    }
    onClickDelete = (channelId) => {this.props.onClickDelete(channelId);}
    onSelectChannel = (channel) => {this.props.onSelectChannel(channel);}
    onEditClick = () => {this.props.startEditing();}
}

export {Channels};

const channelStyle = {
    padding: '10px',
    marginLeft: '15px',
    color: 'white',
    width: '20%',
    backgroundColor: 'black',
    height: 'calc(100vh - 68px)',
    display: 'inline-block'
};

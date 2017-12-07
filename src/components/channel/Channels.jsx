import * as React from 'react';
import * as PropTypes from 'prop-types';

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
        onSubmitChannel: PropTypes.func.isRequired,
        onClickDelete: PropTypes.func.isRequired,
        onSelectChannel: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchData();
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
                    { this.props.channels.map(channel => <p key={channel.id} style={{ display: 'flex', justifyContent: 'space-between'}} onClick={() => this.onSelectChannel(channel)}>
                        <span># {channel.name}</span>
                        <span style={{ width: '20px'}}>
                            <button style={{ display: (channel.customData.owner === localStorage.getItem('loggedUserEmail'))? '' : 'none'}}
                                className="btn btn-danger btn-xs"
                                onClick={() => this.onClickDelete(channel.id)}
                                hidden
                            ><span className="glyphicon glyphicon-trash"></span></button>
                        </span>
                    </p>)
                    }
                </div>
            </div>
        );
    }

    onSubmitChannel = () => { this.props.onSubmitChannel(this.state.newChannel); }
    onClickDelete = (channelId) => {this.props.onClickDelete(channelId);}
    onSelectChannel = (channel) => {this.props.onSelectChannel(channel);}
}

export {Channels};

const channelStyle = {
    padding: '10px',
    color: 'white',
    width: '20%',
    backgroundColor: 'black',
    height: 'calc(100vh - 87px)',
    display: 'inline-block'
};
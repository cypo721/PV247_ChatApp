import * as React from 'react';
import * as PropTypes from 'prop-types';

class ChannelEdit extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        channels: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired),
        onSubmitChannel: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.setState(() => ({newChannelName: ''}));
        this.setState(() => ({newUsers: ''}));
    }

    onChangeHandler = (event) => { this.setState({newChannelName: event.target.value}); };
    onChangeUserHandler = (event) => { this.setState({newUsers: event.target.value}); };

    render() {
        return (
            <div className="text-center">
                <h2> Channel editing: </h2>
                <div>
                    <label>
                        New name of channel:
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.newChannelName}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Insert email of users to invite(COMMA separated):
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.newUSERS}
                            onChange={this.onChangeUserHandler}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className="btn btn-success"
                        onClick={this.onCancel}
                    >
                        Back</button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                        className="btn btn-success"
                        onClick={this.onSubmitChannel}
                    >
                        Save changes!</button>
                </div>
            </div>
        );
    }

    onSubmitChannel = () => {
        this.props.onSubmitChannel(this.state.newChannelName, this.state.newUsers);
        this.setState(() => ({newChannelName: ''}));
        this.setState(() => ({newUsers: ''}));
    }

    onCancel = () =>{this.props.onCancel();}
}

export {ChannelEdit};


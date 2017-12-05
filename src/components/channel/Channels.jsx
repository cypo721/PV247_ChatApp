import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
    };

    componentWillMount() {
        this.props.fetchData(),
        this.setState(() => ({newChannel: ''}));
    }

    onChangeHandler = (event) => { this.setState({newChannel: event.target.value}); }

    render() {
        return (
            <div className="text-center" style={channelStyle}>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.newChannel}
                    onChange={this.onChangeHandler}
                />
                <button
                    className="btn btn-success"
                    onClick={this.onSubmitChannel}
                >
                    Add new channel</button>
                <h4>Channels:</h4>
                {/*{this.props.channels.map(channel => <p key={channel}># {channel.name}</p>)}*/}
            </div>
        );
    }

    onSubmitChannel = () => { this.props.onSubmitChannel(this.state.newChannel); }
}


//export default connect(mapStateToProps, {})(Channels);
export {Channels};

const channelStyle = {
    padding: '10px',
    color: 'white',
    width: '20%',
    backgroundColor: 'black',
    height: 'calc(100vh - 87px)',
};
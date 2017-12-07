import * as React from 'react';
import * as PropTypes from 'prop-types';

class MessageInput extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handleChange = (event) => (this.setState({message: event.target.value}));

    componentWillMount() {
        this.setState({message: ''});
    }

    render() {
        return (
            <div>
                <textarea value={this.state.message} onChange={this.handleChange} style={areaStyle} />
                <button className="btn btn-success" type="submit" value="Send"  onClick={this.onSubmit} style={{ marginTop: '15px', width: '10%'}}>Send</button>
            </div>
        );
    }

    onSubmit = () => { this.props.onSubmit(this.state.message); }
}

export {MessageInput};

const areaStyle = {
    width: '85%',
    height: '99%',
    borderRadius: '10px',
    margin: '12px',
    float: 'left'
};
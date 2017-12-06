import * as React from 'react';

class MessageInput extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    componentWillMount() {
        this.setState({message: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.message} onChange={this.handleChange} style={areaStyle} />

                    <input className="btn btn-success" type="submit" value="Send"  style={{ marginTop: '15px', width: '10%'}}/>
                </form>
            </div>
        );
    }
}

export {MessageInput};

const areaStyle = {
    width: '85%',
    height: '99%',
    borderRadius: '10px',
    margin: '12px',
    float: 'left'
};
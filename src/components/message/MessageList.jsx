import * as React from 'react';
import * as PropTypes from 'prop-types';

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
    };

    // componentWillMount() {
    //     this.props.fetchData();
    // }


    render() {
        return (
            <div style={listDiv}>
                {this.props.messages.map( msg =>
                    <div style={msgDiv} key={msg.id}>
                        <div style={photoDiv}>
                            <img width={'30px'} height={'30px'} style={{borderRadius: '20px'}}
                                src={msg.customData.uri}/></div>
                        <div style={{ width: '80%'}}>
                            <div><b>{msg.customData.nick}    {new Date(msg.createdAt).getHours()}:{new Date(msg.createdAt).getMinutes()}</b></div>
                            <div>{msg.value}</div>
                        </div>
                        <div style={{ float: 'right'}}>
                            <button style={{ display: (msg.createdBy === localStorage.getItem('loggedUserEmail'))? '' : 'none'}}
                                className="btn btn-danger btn-xs"
                                onClick={() => this.onClickDelete(msg.id)}
                                hidden
                            ><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    onClickDelete = (msgId) => {this.props.onClickDelete(msgId);}
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
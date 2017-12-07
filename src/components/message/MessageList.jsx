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
            <div>
                <p>1</p>
                {this.props.messages.map( msg => <p key={msg.id}> {msg.value} - {msg.createdBy}</p>)}
            </div>
        );
    }
}

export {Messages};
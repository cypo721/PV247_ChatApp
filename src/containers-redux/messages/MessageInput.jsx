import { connect } from 'react-redux';
import {MessageInput} from '../../components/message/MessageInput.jsx';
import {addNewMessage} from '../../actions/message';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (message) => dispatch(addNewMessage(message)),
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(MessageInput);

export { connectedComponent as MessageInput };
import { connect } from 'react-redux';
import {addNewChannel} from '../../actions/channel/addNewChannel';
import {MessageInput} from '../../components/message/MessageInput.jsx';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (message) => dispatch(addNewChannel(message)),
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(MessageInput);

export { connectedComponent as MessageInput };
import { connect } from 'react-redux';
import {Messages} from '../../components/message/MessageList.jsx';
import {addNewMessage} from '../../actions/message/addNewMessage';


const mapStateToProps = (state) => ({
    messages: state.application.messages,
});

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (messageId) => dispatch(addNewMessage(messageId)),
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = stateEnhancer(Messages);

export { connectedComponent as Messages };
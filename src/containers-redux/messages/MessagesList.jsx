import { connect } from 'react-redux';
import {Messages} from '../../components/message/MessageList.jsx';
import {deleteSelectedMessage} from '../../actions/message/deleteSelectedMessage';


const mapStateToProps = (state) => ({
    messages: state.application.messages,
});

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (messageId) => dispatch(deleteSelectedMessage(messageId)),
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = stateEnhancer(Messages);

export { connectedComponent as Messages };
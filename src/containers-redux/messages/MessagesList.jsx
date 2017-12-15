import { connect } from 'react-redux';
import {Messages} from '../../components/message/MessageList.jsx';
//import {deleteSelectedMessage} from '../../actions/message/deleteSelectedMessage';
import {deleteSelectedMessage} from '../../actions/message';
//import {updateVotesOfMessage} from '../../actions/message/updateVotesOfMessage';
import {updateVotesOfMessage} from '../../actions/message';
import {prepareMessagesList} from '../../actions/message/index';


const mapStateToProps = (state) => ({
    messages: state.application.messages,
    isEditingChannel: state.application.isEditingChannel,
    actualChannel: state.application.actualChannel
});

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (messageId) => dispatch(deleteSelectedMessage(messageId)),
    onClickUpvote: (message) => dispatch(updateVotesOfMessage(message, 1)),
    onClickDownvote: (message) => dispatch(updateVotesOfMessage(message, -1)),
    onClickDeleteVote: (message) => dispatch(updateVotesOfMessage(message, 0)),
    refreshMsgs: (channel) => dispatch(prepareMessagesList(channel))
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = stateEnhancer(Messages);

export { connectedComponent as Messages };
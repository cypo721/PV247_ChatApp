import { connect } from 'react-redux';
import {ChannelEdit} from '../../components/channel/ChannelEdit.jsx';
import {updateChannel} from '../../actions/channel/updateChannel';
import {finishEditingChannel} from '../../actions/channel/actionCreators';



const mapDispatchToProps = (dispatch) => ({
    onSubmitChannel: (channel) => dispatch(updateChannel(channel)),
    onCancel: () => dispatch(finishEditingChannel())
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const   connectedComponent = stateEnhancer(ChannelEdit);

export { connectedComponent as ChannelEdit };
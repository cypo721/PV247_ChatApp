import { connect } from 'react-redux';
import { Channels } from '../../components/channel/Channels.jsx';
import {initializeApp} from '../../actions/channel/initializeApp';
//import {addNewChannel} from '../../actions/channel/addNewChannel';
import {addNewChannel} from '../../actions/channel/';
//import {removeSelectedChannel} from '../../actions/channel/removeSelectedChannel';
import {removeSelectedChannel} from '../../actions/channel/';
import {prepareMessagesList} from '../../actions/message';
//import {prepareMessagesList} from '../../actions/message/prepareMessagesList';
import {fetchUserDetails} from '../../actions/profile/';
import {startEditingChannel} from '../../actions/channel/actionCreators';


const mapStateToProps = (state) => ({
    channels: state.application.appChannels.channels,
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(initializeApp()),
    fetchUser: () => dispatch(fetchUserDetails()),
    onSubmitChannel: (channel) => dispatch(addNewChannel(channel)),
    onClickDelete: (channelId) => dispatch(removeSelectedChannel(channelId)),
    onSelectChannel: (channel) => dispatch(prepareMessagesList(channel)),
    startEditing: () => dispatch(startEditingChannel())
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const   connectedComponent = stateEnhancer(Channels);

export { connectedComponent as Channels };
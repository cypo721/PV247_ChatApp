import { connect } from 'react-redux';
import { Channels } from '../../components/channel/Channels.jsx';
import {initializeApp} from '../../actions/channel/initializeApp';
import {addNewChannel} from '../../actions/channel/addNewChannel';
import {removeSelectedChannel} from '../../actions/channel/removeSelectedChannel';
import {prepareMessagesList} from '../../actions/message/prepareMessagesList';


const mapStateToProps = (state) => ({
    channels: state.application.appChannels.channels,
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(initializeApp()),
    onSubmitChannel: (channel) => dispatch(addNewChannel(channel)),
    onClickDelete: (channelId) => dispatch(removeSelectedChannel(channelId)),
    onSelectChannel: (channel) => dispatch(prepareMessagesList(channel))
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const   connectedComponent = stateEnhancer(Channels);

export { connectedComponent as Channels };
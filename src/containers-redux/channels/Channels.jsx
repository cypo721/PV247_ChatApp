import { connect } from 'react-redux';
import { Channels } from '../../components/channel/Channels.jsx';
import {initializeApp} from '../../actions/channel/initializeApp';
import {addNewChannel} from '../../actions/channel/addNewChannel';


const mapStateToProps = (state) => ({
    channels: state.application.appChannels.channels,
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(initializeApp()),
    onSubmitChannel: (channel) => dispatch(addNewChannel(channel)),
});

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = stateEnhancer(Channels);

export { connectedComponent as Channels };
import { connect } from 'react-redux';
import { Channels } from '../../components/channel/Channels.jsx';
import {initializeApp} from '../../actions/channel/initializeApp';
import {addNewChannel} from '../../actions/channel/addNewChannel';

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(initializeApp()),
    onSubmitChannel: (channel) => dispatch(addNewChannel(channel)),
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(Channels);

export { connectedComponent as Channels };
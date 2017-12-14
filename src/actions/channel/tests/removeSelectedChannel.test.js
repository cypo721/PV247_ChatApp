import {startRemovingChannel} from '../actionCreators';
import {receiveAppData} from '../../shared/actionCreators';
import {removeSelectedChannelFactory} from '../removeSelectedChannel';

describe('test remove channel',  () => {
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        //const receiveAppData = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt',
            },
            application: {
                actualChannel: ''
            }
        });
        const input = {
            channel: {id: 6,name: 't',customData: {owner: 't',users: ['t']},isSelected: false}
        }
        const expected = {
            id: '5',
            channels: []
        };
        const convertFromServerData = ( () => (expected));
        const removeSelectedChannel = removeSelectedChannelFactory({
            removeChannel: () => Promise.resolve(input),
            convertFromServerData
        });
        const dispatchable = removeSelectedChannel(3);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startRemovingChannel());
        expect(dispatch).toHaveBeenCalledWith(receiveAppData(expected));
        done();
    });
});
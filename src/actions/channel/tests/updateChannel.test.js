import {channelSelection, finishEditingChannel, startUpdatingChannel} from '../actionCreators';
import {receiveAppData} from '../../shared/actionCreators';
import {updateChannelFactory} from '../updateChannel';

describe('test add new channel',  () => {
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        //const receiveAppData = jest.fn();
        const channel = {
            id: '5',
            customData: {
                users: []
            }
        }
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt'
            },
            application: {
                actualChannel: channel
            }
        });
        const input = {
            id: '5',
            channels: '[{"id": "6","name": "t","customData": {"owner": "t","users": ["t"]},"isSelected": "false"}]'
        }
        const expected = {
            id: '5',
            channels: [{
                id: '6',
                name: 't',
                customData: {
                    owner: 't',
                    users: ['t']
                },
                isSelected: false,

            }]
        };
        const convertFromServerData = ( () => (expected));
        const updateChannel = updateChannelFactory({
            updateExistingChannel: () => Promise.resolve(input),
            convertFromServerData
        });
        const dispatchable = updateChannel('test', 'd@d.dd');
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUpdatingChannel());
        expect(dispatch).toHaveBeenCalledWith(receiveAppData(expected));
        expect(dispatch).toHaveBeenCalledWith(finishEditingChannel());
        expect(dispatch).toHaveBeenLastCalledWith(channelSelection(channel));
        done();
    });
});
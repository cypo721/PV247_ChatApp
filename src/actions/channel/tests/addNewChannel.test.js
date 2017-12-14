import {addNewChannelFactory} from '../addNewChannel';
import {startCreatingChannel} from '../actionCreators';
import {receiveAppData} from '../../shared/actionCreators';

describe('test add new channel',  () => {
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        //const receiveAppData = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt'
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
        const addChannel = addNewChannelFactory({
            uploadChannel: () => Promise.resolve(input),
            convertFromServerData
        });
        const dispatchable = addChannel(3);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startCreatingChannel());
        expect(dispatch).toHaveBeenCalledWith(receiveAppData(expected));
        done();
    });
});
import {loadMessagesOfChannel} from '../actionCreators';
import {prepareMessagesListFactory} from '../prepareMessagesList';
import {channelSelection, markSelectedChannel} from '../../channel/actionCreators';


describe('test prepare messages',  () => {
    /**
     * @jest-environment jsdom
     */
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt',
            },
            application: {
                actualChannel: {
                    id: '5'
                }
            },
            profile: {
                details: {
                    fullName: 'tester'
                },
                avatarUri: 'http://blob/avatar.png'
            }
        });
        const channel = {
            id: '5',
            customData: {
                users: []
            }
        };
        const msgs = [{
            id :'6',
            value: 'test'
        },{
            id :'7',
            value: 'test2'
        }
        ];

        const convertFromServerMessages = ( () => (msgs));
        const prepareMessagesList = prepareMessagesListFactory({
            loadMessages:() => Promise.resolve(),
            convertFromServerMessages
        });
        const dispatchable = prepareMessagesList(channel);
        await dispatchable(dispatch, getState, localStorage);

        expect(dispatch).toHaveBeenCalledWith(channelSelection(channel));
        expect(dispatch).toHaveBeenCalledWith(markSelectedChannel(channel));
        expect(dispatch).toHaveBeenLastCalledWith(loadMessagesOfChannel(msgs));
        done();
    });
});
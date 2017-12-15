import {addCreatedMessage, startCreatingMessage} from '../actionCreators';
import {addNewMessageFactory} from '../addNewMessage';

describe('test add message',  () => {
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
        const msg = {
            id :'6',
            value: 'test'
        }
        const convertNewMessage = ( () => (msg));
        const addNewMessage = addNewMessageFactory({
            uploadMessage:() => Promise.resolve(msg),
            convertNewMessage
        });
        const dispatchable = addNewMessage(3);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startCreatingMessage());
        expect(dispatch).toHaveBeenLastCalledWith(addCreatedMessage(msg));
        done();
    });
});
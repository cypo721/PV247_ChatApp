import {removeMessage, startRemovingMessage} from '../actionCreators';
import {deleteSelectedMessageFactory} from '../deleteSelectedMessage';

describe('test remove message',  () => {
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
            }
        });

        const removeSelectedChannel = deleteSelectedMessageFactory(() => Promise.resolve(),);
        const dispatchable = removeSelectedChannel(3);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startRemovingMessage());
        expect(dispatch).toHaveBeenLastCalledWith(removeMessage(3));
        done();
    });
});
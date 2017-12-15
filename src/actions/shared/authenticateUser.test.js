import {authenticateUserFactory} from './authenticateUser';
import {loggedUser, receiveValidToken, startAuthentication} from './actionCreators';
import { push } from 'connected-react-router';

describe('test authenticate user',  () => {
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        const getState = () => ({
            shared: {},
        });
        const token = 'pretty please';
        const email = 't@t.tt'

        const authenticateUser = authenticateUserFactory(() => Promise.resolve(token))
        const dispatchable = authenticateUser('', email);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startAuthentication());
        expect(dispatch).toHaveBeenCalledWith(receiveValidToken(token));
        expect(dispatch).toHaveBeenCalledWith(loggedUser(email));
        expect(dispatch).toHaveBeenLastCalledWith(push(''));
        done();
    });
});
import {token} from '../token';
import {invalidateToken, receiveValidToken} from '../../../actions/shared/actionCreators';

describe('token reducer', () => {
    test('receive token', () => {
        const expectedValue = 'pretty token';
        const newState = token(null, receiveValidToken(expectedValue));
        expect(newState).toBe(expectedValue);
    });

    test('invalidate token', () => {
        const newState = token(null, invalidateToken());
        expect(newState).toBeNull();
    });
});
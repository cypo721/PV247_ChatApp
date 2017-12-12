import {isAuthenticating} from '../isAuthenticating';
import {receiveValidToken, startAuthentication} from '../../../actions/shared/actionCreators';

describe('isAuthencicating reducer', () => {
    test('start authentication', () => {
        const expectedValue = true;
        const newState = isAuthenticating(null, startAuthentication());
        expect(newState).toBe(expectedValue);
    });

    test('receive token', () => {
        const expectedValue = false;
        const newState = isAuthenticating(null, receiveValidToken());
        expect(newState).toBe(expectedValue);
    });
});
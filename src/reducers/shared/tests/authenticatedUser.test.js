import {email} from '../authentificatedUser';
import {loggedUser} from '../../../actions/shared/actionCreators';

describe('insert autheticated user email', () => {
    test('authenticated user', () => {
        const expectedValue = 'c@c.cz';
        const newState = email(null, loggedUser(expectedValue));
        expect(newState).toBe(expectedValue);
    });
});
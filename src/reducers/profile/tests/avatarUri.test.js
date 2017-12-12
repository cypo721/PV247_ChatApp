import {avatarUri} from '../avatarUri';
import {updateProfileaAvatar} from '../../../actions/profile/actionCreators';

describe('details reducer', () => {
    test('store details', () => {
        const expectedValue = 'http://some.defaul.uri/download/profilePictru';
        const newState = avatarUri(null, updateProfileaAvatar(expectedValue))
        expect(newState).toBe(expectedValue);
    });
});
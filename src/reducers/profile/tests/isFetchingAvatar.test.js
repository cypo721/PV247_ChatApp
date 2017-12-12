import {isFetchingAvatar} from '../isFetchingAvatar';
import {startFetchingProfileAvatar, updateProfileaAvatar} from '../../../actions/profile/actionCreators';

describe('isFetchingAvatar reducer', () => {
    test('start authentication', () => {
        const expectedValue = true;
        const newState = isFetchingAvatar(null, startFetchingProfileAvatar())
        expect(newState).toBe(expectedValue);
    });

    test('receive token', () => {
        const expectedValue = false;
        const newState = isFetchingAvatar(null, updateProfileaAvatar ('uri'))
        expect(newState).toBe(expectedValue);
    });
});
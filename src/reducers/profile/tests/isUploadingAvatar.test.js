import {startUploadingProfileAvatar, updateProfileaAvatar} from '../../../actions/profile/actionCreators';
import {isUploadingAvatar} from '../isUploadingAvatar';

describe('isUploadingAvatar reducer', () => {
    test('uploading avatar', () => {
        const expectedValue = true;
        const newState = isUploadingAvatar(null, startUploadingProfileAvatar());
        expect(newState).toBe(expectedValue);
    });

    test('receive token', () => {
        const expectedValue = false;
        const newState = isUploadingAvatar(null, updateProfileaAvatar('uri') );
        expect(newState).toBe(expectedValue);
    });
});
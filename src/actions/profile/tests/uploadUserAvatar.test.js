import {
    startUploadingProfileAvatar,
} from '../actionCreators';
import {uploadUserAvatarFactory} from '../uploadUserAvatar';

describe('test upload avatar',  () => {
    test('dispatches actions in correct order', async (done) => {
        const dispatch = jest.fn();
        const updateProfileDetails = jest.fn();
        const fetchUserAvatar = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please'
            },
            profile: {
                details: {
                    email: 'in@the.phone'
                }
            }
        });

        const expectedUri = 'http://blob/avatar.png';
        // const expectedDetails = {
        //     email: 'in@the.phone',
        //     customData: `{ "avatarId": "${expectedUri}" }`,
        // };

        const uploadUserAvatar = uploadUserAvatarFactory({
            fetchFileUpload: () => Promise.resolve([{id :expectedUri}]),
            updateProfileDetails,
            fetchUserAvatar

        });
        const dispatchable = uploadUserAvatar(3);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUploadingProfileAvatar());
        //expect(updateProfileDetails).toHaveBeenLastCalledWith(expectedDetails);
        //expect(fetchUserAvatar).toHaveBeenLastCalledWith(expectedUri);
        done();
    });
})

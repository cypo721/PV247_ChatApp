import {fetchUserDetailsFactory} from '../fetchUserDetails';
import {startFetchingProfileAvatar, startFetchingProfileDetails, updateProfileDetails} from '../actionCreators';

test('dispatches actions in correct order', async done => {
    const dispatch = jest.fn(action => action);
    const fetchUserAvatar = jest.fn();
    const expectedAvatarId = 'pretty fly';
    const getState = () => ({
        shared: {
            token: 'pretty please',
            email: 'on@the.phone'
        }
    });
    const servedDetails = {
        email: 'on@the.phone',
        customData: `{ "avatarId": "${expectedAvatarId}" }`,
    };
    const expectedDetails = {
        email: servedDetails.email,
        ...JSON.parse(servedDetails.customData),
    };

    const fetchUserDetails = fetchUserDetailsFactory({
        fetchReceive: () => Promise.resolve(servedDetails),
        fetchUserAvatar,
    });
    const dispatchable = fetchUserDetails();
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startFetchingProfileDetails());
    expect(dispatch).toBeCalledWith(startFetchingProfileAvatar());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileDetails(expectedDetails));
    expect(fetchUserAvatar).toHaveBeenLastCalledWith(expectedAvatarId);
    done();
});
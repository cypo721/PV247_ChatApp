import { fetchUserAvatarFactory } from './fetchUserAvatar';
import {
    startFetchingProfileAvatar,
    updateProfileaAvatar
} from './actionCreators';

test('dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const getState = () => ({
        shared: {
            token: 'pretty please'
        }
    });

    const expectedUri = 'http://blob/avatar.png';

    const fetchUserAvatar = fetchUserAvatarFactory(() => Promise.resolve(expectedUri));
    const dispatchable = fetchUserAvatar(3);
    await dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileAvatar());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileaAvatar(expectedUri));
    done();
});
import { updateProfileDetails} from '../actionCreators';
import {DETAILS_FORM_NAME} from '../../../constants/formNames';
import {uploadUserDetailsFactory} from '../uploadUserDetails';
import {
    startSubmit,
    stopSubmit
} from 'redux-form';

test('dispatches actions in correct order', async done => {
    const dispatch = jest.fn(action => action);
    // const fetchUserAvatar = jest.fn();
    const getState = () => ({
        shared: {
            token: 'pretty please',
            email: 'on@the.phone'
        },
    });
    const expectedDetails = {
        email: 'in@the.phone',
        // ...JSON.parse(servedDetails.customData),
    };

    const uploadUserDetails = uploadUserDetailsFactory( () => Promise.resolve(expectedDetails));
    const dispatchable = uploadUserDetails();
    await dispatchable(dispatch, getState);

    expect(dispatch).toBeCalledWith(startSubmit(DETAILS_FORM_NAME));
    expect(dispatch).toHaveBeenCalledWith(updateProfileDetails(expectedDetails));
    expect(dispatch).toHaveBeenLastCalledWith(stopSubmit(DETAILS_FORM_NAME));
    done();
});
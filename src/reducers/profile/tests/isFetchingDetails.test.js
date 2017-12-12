import {startFetchingProfileDetails, updateProfileDetails} from '../../../actions/profile/actionCreators';
import {isFetchingDetails} from '../isFetchingDetails';

describe('isFetchingDeatils reducer', () => {
    test('start fetching details', () => {
        const expectedValue = true;
        const newState = isFetchingDetails(null, startFetchingProfileDetails());
        expect(newState).toBe(expectedValue);
    });

    test('details update', () => {
        const expectedValue = false;
        const newState = isFetchingDetails(null, updateProfileDetails('details'));
        expect(newState).toBe(expectedValue);
    });
});
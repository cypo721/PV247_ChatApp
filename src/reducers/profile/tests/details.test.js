import {updateProfileDetails} from '../../../actions/profile/actionCreators';
import {details} from '../details';

const defaultDetails = {
    email: 'undefined@null.zero',
    fullName: '',
    phone: '',
};

describe('details reducer', () => {
    test('store details', () => {
        const expectedValue = defaultDetails;
        const newState = details(null, updateProfileDetails(expectedValue))
        expect(newState).toBe(expectedValue);
    });
});
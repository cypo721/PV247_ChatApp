import {convertFromServerDetails, convertToServerDetails} from '../profileDetails';

describe('profile data conversion test', () => {
    test('parse profile data', () => {
        const input = {
            'email':'c@c.cz',
            'customData':'{"fullName":"Testovac novy","phone":"111111111","avatarId":"feae2f4f-8c6e-4e15-be9c-0025f86c8eb3"}'
        };
        const expected = {
            'email':'c@c.cz',
            'fullName':'Testovac novy',
            'phone':'111111111',
            'avatarId':'feae2f4f-8c6e-4e15-be9c-0025f86c8eb3'
        };
        const newState = convertFromServerDetails(input);
        expect(newState).toEqual(expected);
    });

    test('create profile data for server', () => {
        const input = {
            'email':'c@c.cz',
            'fullName':'Testovac novy',
            'phone':'111111111',
            'avatarId':'feae2f4f-8c6e-4e15-be9c-0025f86c8eb3'
        };
        const expected = '{"fullName":"Testovac novy","phone":"111111111","avatarId":"feae2f4f-8c6e-4e15-be9c-0025f86c8eb3"}';

        const newState = convertToServerDetails(input);
        expect(newState).toEqual(expected);
    });
});
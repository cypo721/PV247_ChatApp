import {convertFromServerData} from '../applicationData';

describe('app data conversion test', () => {
    test('parse app data', () => {
        const input = {
            'id': '5',
            'channels': [{
                'id': '6',
                'name': 'test',
                'customData': '{"owner":"c@c.cz","users":["c@c.cz"]}'
            }]
        };
        const expected = {
            'id': '5',
            'channels': [{
                'id': '6',
                'name': 'test',
                'customData': {
                    'owner':'c@c.cz',
                    'users':['c@c.cz'],
                },
                'isSelected': false
            }]
        };
        const newState = convertFromServerData(input);
        expect(newState).toEqual(expected);
    });
});
import {convertFromServerMessages, convertNewMessage} from '../messageData';

describe('message data conversion test', () => {
    test('parse msg data', () => {
        const input = {
            id: '5',
            value: 'value',
            createdAt: 'time',
            createdBy: 'c@c.cz',
            updatedBy: 'c@c.cz',
            updatedAt: 'time,',
            customData: '{"uri": "uri","nick": "tester","up": [],"down": []}'
        };
        const expected = {
            id: '5',
            value: 'value',
            createdAt: 'time',
            createdBy: 'c@c.cz',
            updatedBy: 'c@c.cz',
            updatedAt: 'time,',
            customData: {
                uri: 'uri',
                nick: 'tester',
                up: [],
                down: []
            }
        };
        const newState = convertNewMessage(input);
        expect(newState).toEqual(expected);
    });

    test('parse all messages', () => {
        const input = [{
            id: '5',
            value: 'value',
            createdAt: 'time',
            createdBy: 'c@c.cz',
            updatedBy: 'c@c.cz',
            updatedAt: 'time,',
            customData: '{"uri": "uri","nick": "tester","up": [],"down": []}'
        }];
        const expected = [{
            id: '5',
            value: 'value',
            createdAt: 'time',
            createdBy: 'c@c.cz',
            updatedBy: 'c@c.cz',
            updatedAt: 'time,',
            customData: {
                uri: 'uri',
                nick: 'tester',
                up: [],
                down: []
            }
        }];
        const newState = convertFromServerMessages(input);
        expect(newState).toEqual(expected);
    });
});
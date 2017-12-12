import {downvote, loadMessagesOfChannel, removeVote, upvote} from '../../actions/message/actionCreators';
import {messages} from './channelMessages';

const init= [
    {   id: '5',
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
        }},
    {
        id: '6',
        value: 'value',
        createdAt: 'time',
        createdBy: 'd@d.cz',
        updatedBy: 'd@d.cz',
        updatedAt: 'time,',
        customData: {
            uri: 'uri',
            nick: 'tester',
            up: [],
            down: []
        }
    }];

const initForRemove = [
    {   id: '5',
        value: 'value',
        createdAt: 'time',
        createdBy: 'c@c.cz',
        updatedBy: 'c@c.cz',
        updatedAt: 'time,',
        customData: {
            uri: 'uri',
            nick: 'tester',
            up: ['d@d.cz'],
            down: ['c@c.cz']
        }}];


describe('channel messages reducer', () => {
    test('get messages', () => {
        const newState = messages(null, loadMessagesOfChannel(init))
        expect(newState).toEqual(init);
    });

    test('upvote msg', () => {
        const expectedValue = [
            {   id: '5',
                value: 'value',
                createdAt: 'time',
                createdBy: 'c@c.cz',
                updatedBy: 'c@c.cz',
                updatedAt: 'time,',
                customData: {
                    uri: 'uri',
                    nick: 'tester',
                    up: ['d@d.cz'],
                    down: []
                }},
            {
                id: '6',
                value: 'value',
                createdAt: 'time',
                createdBy: 'd@d.cz',
                updatedBy: 'd@d.cz',
                updatedAt: 'time,',
                customData: {
                    uri: 'uri',
                    nick: 'tester',
                    up: [],
                    down: []
                }
            }];
        const newState = messages(init.reverse(), upvote(init[0], 'd@d.cz'))
        expect(newState).toEqual(expectedValue);
    });

    test('downvote msg', () => {
        const expectedValue = [
            {   id: '5',
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
                }},
            {
                id: '6',
                value: 'value',
                createdAt: 'time',
                createdBy: 'd@d.cz',
                updatedBy: 'd@d.cz',
                updatedAt: 'time,',
                customData: {
                    uri: 'uri',
                    nick: 'tester',
                    up: [],
                    down: ['c@c.cz']
                }
            }];
        const newState = messages(init, downvote(init[1], 'c@c.cz'))
        expect(newState).toEqual(expectedValue);
    });

    test('remove vote of msg', () => {
        const expectedValue = [
            {   id: '5',
                value: 'value',
                createdAt: 'time',
                createdBy: 'c@c.cz',
                updatedBy: 'c@c.cz',
                updatedAt: 'time,',
                customData: {
                    uri: 'uri',
                    nick: 'tester',
                    up: [],
                    down: ['c@c.cz']
                }}];
        const newState = messages(initForRemove, removeVote(initForRemove[0], 'd@d.cz'))
        expect(newState).toEqual(expectedValue);
    });

});
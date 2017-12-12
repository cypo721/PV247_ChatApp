import {actualChannel} from '../channelReducer';
import {markSelectedChannel, unselectChannel} from '../../../actions/channel/actionCreators';

describe('channel reducer', () => {
    test('store data of actual selected channel', () => {
        const expectedValue = {
            id: '5',
            name: 'testChannel'
        };
        const newState = actualChannel(null, markSelectedChannel(expectedValue))
        expect(newState).toBe(expectedValue);
    });

    test('stores if channel is editing in the moment', () => {
        const newState = actualChannel(null, unselectChannel())
        expect(newState).toBeNull();
    });
});
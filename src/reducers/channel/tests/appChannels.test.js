import {receiveAppData} from '../../../actions/shared/actionCreators';
import {appChannels} from '../appChannels';

describe('application channels reducer', () => {
    test('store data of all channels', () => {
        const expectedValue = {
            id: 'appID6456879',
            channels: [
                {
                    id: '5',
                    name: 'testChannel',
                    isSelected: true
                },
                {
                    id: '6',
                    name: 'testChannel22222',
                    isSelected: false
                }
            ]
        };
        const newState = appChannels(null, receiveAppData(expectedValue))
        expect(newState).toEqual(expectedValue);
    });

    test('mark selected channel', () => {
        const inputValue = {
            id: 'appID6456879',
            channels: [
                {
                    id: '5',
                    name: 'testChannel',
                    isSelected: false
                },
                {
                    id: '6',
                    name: 'testChannel22222',
                    isSelected: false
                }
            ]
        };
        const expectedValue = {
            id: 'appID6456879',
            channels: [
                {
                    id: '5',
                    name: 'testChannel',
                    isSelected: false
                },
                {
                    id: '6',
                    name: 'testChannel22222',
                    isSelected: false
                }
            ]
        };
        const newState = appChannels(null, receiveAppData(inputValue, '5'))
        expect(newState).toEqual(expectedValue);
    });

});
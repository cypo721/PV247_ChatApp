import {finishEditingChannel, startEditingChannel} from '../../../actions/channel/actionCreators';
import {isEditingChannel} from '../isEditing';

describe('isEditing reducer', () => {
    test('stores if channel is editing in the moment', () => {
        const expectedValue = true;
        const newState = isEditingChannel(null, startEditingChannel())
        expect(newState).toBe(expectedValue);
    });

    test('stores if channel is editing in the moment', () => {
        const expectedValue = false;
        const newState = isEditingChannel(null, finishEditingChannel())
        expect(newState).toBe(expectedValue);
    });
});
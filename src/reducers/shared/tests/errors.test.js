// import {errors} from '../errors';
// import {FAILED_UPDATING_CHANNEL} from '../../../constants/uiConstants';
// import {failedUpdatingChannel} from '../../../actions/channel/actionCreators';
// import {uuid} from '../../../utils/uuidGenerator';
//
// describe('errors reducer', () => {
//     test('create error', () => {
//         const error= {
//             id: uuid(),
//             message: 'Request unauthorized.',
//             statusText: 'Unauthorized!',
//             statusCode: '401',
//         };
//         const newState = errors(null, failedUpdatingChannel(FAILED_UPDATING_CHANNEL, error));
//         expect(newState).toBe(error);
//     });
// });
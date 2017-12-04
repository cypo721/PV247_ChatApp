import { push } from 'connected-react-router';
import {dismissError, failRegistration, startRegistration} from './actionCreators';
import {FAILED_REGISTRATION_MESSAGE, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {registerUser} from '../../utils/api/registerUser';

export const registerUserAccount = (destinationLocation, loginId) =>
    (dispatch) => {
        dispatch(startRegistration());

        return registerUser(destinationLocation, loginId)
            .then(() => {
                dispatch(push(destinationLocation));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failRegistration(FAILED_REGISTRATION_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
import {dismissError, failAuthentication, receiveAppData, startFetchingData} from '../shared/actionCreators';
import {FAILED_FETCH_APP_DATA_MESSAGE, MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import { fetchAppData } from '../../utils/api/fetchAppData';

export const initializeApp = () =>
    (dispatch , getState) => {
        dispatch(startFetchingData);
        const authToken = getState().shared.token;

        return fetchAppData(authToken)
            .then((data) => {
                dispatch(receiveAppData(data));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(FAILED_FETCH_APP_DATA_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
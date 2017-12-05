import {dismissError} from '../shared/actionCreators';
import {MILISECONDS_TO_AUTO_DISMISS_ERROR} from '../../constants/uiConstants';
import {performAuthorizedRequest} from '../profile/performAuthorizedRequest';

export const addNewChannel = (channel) =>
    async (dispatch, getState) => {

        const authToken = getState().shared.token;
        const applicationDetails = convertToServerDetails(details);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await fetchRequest(requestUri, authToken, serverDetails);
                const updatedDetails = convertFromServerDetails(receivedServerDetails);
                return dispatch(updateProfileDetails(updatedDetails));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }
    };
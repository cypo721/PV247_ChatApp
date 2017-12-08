import {createApiMessageUriDelete} from '../../constants/api';
import {validateDelete} from '../../utils/api/validateDelete';

export const deleteMessage = (token, messageId, channelId) =>
    fetch(
        createApiMessageUriDelete(channelId, messageId),
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Accept': 'application/json',
            }
        })
        .then(validateDelete);
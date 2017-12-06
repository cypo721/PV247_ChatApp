import {createApiMessageUriDelete} from '../../constants/api';
import {validateResponse} from '../../utils/api/validateResponse';

export const deleteMessage = (token, channelId, messageId) =>
    fetch(
        createApiMessageUriDelete(channelId, messageId),
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);
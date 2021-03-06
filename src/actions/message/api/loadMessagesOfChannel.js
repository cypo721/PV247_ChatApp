import {createApiMessageUri} from '../../../constants/api';
import {validateResponse} from '../../../utils/api/validateResponse';

export const loadMessagesFactory = (fetch) => (token, channelId) =>
    fetch(
        createApiMessageUri(channelId),
        {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);
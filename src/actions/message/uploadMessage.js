import {createApiMessageUri} from '../../constants/api';
import {validateResponse} from '../../utils/api/validateResponse';

export const uploadMessage = (token, owner, text, channelId) =>
    fetch(
        createApiMessageUri(channelId),
        {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    'value': text,
                    'createdBy': owner,
                    'createdAt': 'test'
                }
            ),
        })
        .then(validateResponse);
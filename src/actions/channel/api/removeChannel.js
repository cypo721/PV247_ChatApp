import {API_APP_URI} from '../../../constants/api';
import {validateResponse} from '../../../utils/api/validateResponse';

export const removeChannel = (token, channelId) =>
    fetch(
        API_APP_URI,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json-patch+json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                [
                    {
                        'path': '/channels/' + channelId,
                        'op': 'remove',
                    }
                ]
            ),
        })
        .then(validateResponse);
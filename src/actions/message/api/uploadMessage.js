import {createApiMessageUri} from '../../../constants/api';
import {validateResponse} from '../../../utils/api/validateResponse';

export const uploadMessageFactory = (fetch) => (token, text, channelId, avatarUri, nick) =>
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
                    'customData': JSON.stringify({
                        'uri': avatarUri,
                        'nick': nick,
                        'up': [],
                        'down': []
                    })
                }
            ),
        })
        .then(validateResponse);
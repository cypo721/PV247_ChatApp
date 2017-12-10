import {createApiMessageUri} from '../../../constants/api';
import {validateResponse} from '../../../utils/api/validateResponse';

export const uploadMessage = (token, text, channelId, avatarUri, nick) =>
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
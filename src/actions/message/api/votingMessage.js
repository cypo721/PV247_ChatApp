import {validateResponse} from '../../../utils/api/validateResponse';
import {createApiMessageUriConcrete} from '../../../constants/api';

export const votingMessageFactory = (fetch) => (token, channelId, message, up, down) =>
    fetch(
        createApiMessageUriConcrete(channelId, message.id),
        {
            method: 'PUT',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(
                {
                    'value': message.value,
                    'customData': JSON.stringify({
                        'uri': message.customData.uri,
                        'nick': message.customData.nick,
                        'up': up,
                        'down': down
                    })
                }
            ),
        })
        .then(validateResponse);
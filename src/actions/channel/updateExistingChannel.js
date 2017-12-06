import {API_APP_URI} from '../../constants/api';
import {validateResponse} from '../../utils/api/validateResponse';

export const uploadChannel = (token, channel, newName) =>
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
                        'path': '/channels/' + channel.id,
                        'op': 'replace',
                        'value': {
                            'id': channel.id,
                            'name': newName,
                            'customData': JSON.stringify({
                                'owner': channel.customData.owner,
                                'users': channel.customData.users,
                            })
                        }
                    }
                ]
            ),
        })
        .then(validateResponse);
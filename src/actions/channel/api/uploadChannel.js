import {API_APP_URI} from '../../../constants/api';
import {validateResponse} from '../../../utils/api/validateResponse';

export const uploadChannel = (token, owner, name) =>
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
                        'path': '/channels/-',
                        'op': 'add',
                        'value': {
                            'name': name,
                            'customData': JSON.stringify({
                                'owner': owner,
                                'users': [owner]
                            })
                        }
                    }
                ]
            ),
        })
        .then(validateResponse);
import { validateResponse } from './validateResponse';

export const fetchReceiveFactory = (fetch) => (uri, token) =>
    fetch(
        uri,
        {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);
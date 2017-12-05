import {validateResponse} from './validateResponse';
import {API_APP_URI} from '../../constants/api';

export const fetchAppData = (token) =>
    fetch(
        API_APP_URI,
        {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(validateResponse);
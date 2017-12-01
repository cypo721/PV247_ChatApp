import { API_REGISTER_USER_URI} from '../../constants/api';
import { validateResponse } from './validateResponse';

export const registerUser = (userEmail) => fetch(
    API_REGISTER_USER_URI,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userEmail)
    })
    .then(validateResponse);
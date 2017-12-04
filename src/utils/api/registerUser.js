import { API_REGISTER_USER_URI} from '../../constants/api';
import { validateResponse } from './validateResponse';

export const registerUser = (email) => fetch(
    API_REGISTER_USER_URI,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'email': email,
            'customData': JSON.stringify({
                'fullName': '',
                'phone': '',
                'avatarId': 'feae2f4f-8c6e-4e15-be9c-0025f86c8eb3'
            })
        })
    })
    .then(validateResponse);
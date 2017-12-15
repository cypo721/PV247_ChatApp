import {fetchAuthTokenFactory} from '../../utils/api/fetchAuthToken';
import {authenticateUserFactory} from './authenticateUser';

const fetchAuthToken = fetchAuthTokenFactory(fetch);
export const authenticateUser = authenticateUserFactory(fetchAuthToken);
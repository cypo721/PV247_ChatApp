import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    shared: {
        token: getPersistedToken()
    }
});

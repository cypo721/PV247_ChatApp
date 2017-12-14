import {fetchUserAvatarFactory} from './fetchUserAvatar';
import {fetchReceiveFactory} from '../../utils/api/fetchReceive';
import {fetchUserDetailsFactory} from './fetchUserDetails';
import {fetchRequestFactory} from '../../utils/api/fetchRequest';
import {uploadUserDetailsFactory} from './uploadUserDetails';
import {fetchFileUploadFactory} from '../../utils/api/fetchFileUpload';
import {uploadUserAvatarFactory} from './uploadUserAvatar';

const fetchReceive = fetchReceiveFactory(fetch);
export const fetchUserAvatar = fetchUserAvatarFactory(fetchReceive);
export const fetchUserDetails = fetchUserDetailsFactory({ fetchReceive, fetchUserAvatar });

const fetchRequest = fetchRequestFactory(fetch);
const fetchFileUpload = fetchFileUploadFactory(fetch);

export const uploadUserDetails = uploadUserDetailsFactory(fetchRequest);
export const uploadUserAvatar = uploadUserAvatarFactory({fetchFileUpload, uploadUserDetails, fetchUserAvatar});
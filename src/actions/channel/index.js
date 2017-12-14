import {uploadChannelFactory} from './api/uploadChannel';
import {updateExistingChannelFactory} from './api/updateExistingChannel';
import {removeChannelFactory} from './api/removeChannel';
import {removeSelectedChannelFactory} from './removeSelectedChannel';
import {updateChannelFactory} from './updateChannel';
import {addNewChannelFactory} from './addNewChannel';
import {convertFromServerData} from '../../utils/api/conversions/applicationData';

const removeChannel = removeChannelFactory(fetch);
export const removeSelectedChannel = removeSelectedChannelFactory({removeChannel, convertFromServerData});

const updateExistingChannel = updateExistingChannelFactory(fetch);
export const updateChannel = updateChannelFactory({updateExistingChannel, convertFromServerData});

const uploadChannel = uploadChannelFactory(fetch);
export const addNewChannel = addNewChannelFactory({uploadChannel, convertFromServerData})

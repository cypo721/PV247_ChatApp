const API_URI = 'https://pv247messaging.azurewebsites.net/api';
//const API_APP_ID = 'e01430f8-966d-4935-9911-cbdef88a954a'; //dev appka
const API_APP_ID = '2669a2fd-e5ac-4cbe-ba88-82eb6d44c3f3'; // nova appka - ok data
//const API_APP_ID = 'f1a58775-114f-46c0-ab5b-9712dac5a285'; appka z hodiny

export const API_AUTH_URI = `${API_URI}/auth`;
export const API_FILE_URI = `${API_URI}/file`;
export const API_APP_URI = `${API_URI}/app/${API_APP_ID}`;
export const API_REGISTER_USER_URI = `${API_URI}/${API_APP_ID}/user`;
export const createApiUserUri = (userEmail) => `${API_URI}/${API_APP_ID}/user/${userEmail}`;
export const createApiFilerUri = (fileId) => `${API_URI}//file/${fileId}/download-link`;
export const createApiMessageUri = (channelId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message`;
export const createApiMessageUriConcrete = (channelId, messageId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message/${messageId}`;

//export const USER_EMAIL = 'undefined@null.zero';
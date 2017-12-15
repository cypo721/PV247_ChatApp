import {deleteMessageFactory} from './api/deleteMessage';
import {uploadMessageFactory} from './api/uploadMessage';
import {votingMessageFactory} from './api/votingMessage';
import {deleteSelectedMessageFactory} from './deleteSelectedMessage';
import {convertFromServerMessages, convertNewMessage} from '../../utils/api/conversions/messageData';
import {addNewMessageFactory} from './addNewMessage';
import {updateVotesOfMessageFactory} from './updateVotesOfMessage';
import {loadMessagesFactory} from './api/loadMessagesOfChannel';
import {prepareMessagesListFactory} from './prepareMessagesList';

const deleteMessage = deleteMessageFactory(fetch);
export const deleteSelectedMessage = deleteSelectedMessageFactory(deleteMessage);

const uploadMessage = uploadMessageFactory(fetch);
export const addNewMessage = addNewMessageFactory({uploadMessage, convertNewMessage});

const votingMessage = votingMessageFactory(fetch);
export const updateVotesOfMessage = updateVotesOfMessageFactory({votingMessage, convertNewMessage});

const loadMessages = loadMessagesFactory(fetch);
export const prepareMessagesList = prepareMessagesListFactory({loadMessages, convertFromServerMessages})


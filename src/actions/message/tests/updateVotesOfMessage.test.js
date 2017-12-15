import {downvote, removeVote, startUpdatingMessage, upvote} from '../actionCreators';
import {updateVotesOfMessageFactory} from '../updateVotesOfMessage';

describe('test add message',  () => {
    test('dispatches actions in correct order - UPVOTE', async (done) => {
        const dispatch = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt',
            },
            application: {
                actualChannel: {
                    id: '5'
                }
            },
            profile: {
                details: {
                    fullName: 'tester'
                },
                avatarUri: 'http://blob/avatar.png'
            }
        });
        const msg = {
            id :'6',
            value: 'test',
            customData: {
                up: [],
                down: []
            }
        };
        const expected = {
            id :'6',
            value: 'test',
            customData: {
                up: ['t@t.tt'],
                down: []
            }
        }
        const convertNewMessage = ( () => (expected));
        const updateVotesOfMessage = updateVotesOfMessageFactory({
            votingMessage:() => Promise.resolve(expected),
            convertNewMessage
        });
        const dispatchable = updateVotesOfMessage(msg, 1);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUpdatingMessage());
        expect(dispatch).toHaveBeenLastCalledWith(upvote(expected, 't@t.tt'));
        done();
    });

    test('dispatches actions in correct order - REMOVEVOTE', async (done) => {
        const dispatch = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt',
            },
            application: {
                actualChannel: {
                    id: '5'
                }
            },
            profile: {
                details: {
                    fullName: 'tester'
                },
                avatarUri: 'http://blob/avatar.png'
            }
        });
        const msg = {
            id :'6',
            value: 'test',
            customData: {
                up: [],
                down: []
            }
        };
        const expected = {
            id :'6',
            value: 'test',
            customData: {
                up: [],
                down: ['t@t.tt']
            }
        }
        const convertNewMessage = ( () => (expected));
        const updateVotesOfMessage = updateVotesOfMessageFactory({
            votingMessage:() => Promise.resolve(expected),
            convertNewMessage
        });
        const dispatchable = updateVotesOfMessage(msg, -1);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUpdatingMessage());
        expect(dispatch).toHaveBeenLastCalledWith(downvote(expected, 't@t.tt'));
        done();
    });


    test('dispatches actions in correct order - DOWNVOTE', async (done) => {
        const dispatch = jest.fn();
        const getState = () => ({
            shared: {
                token: 'pretty please',
                email: 't@t.tt',
            },
            application: {
                actualChannel: {
                    id: '5'
                }
            },
            profile: {
                details: {
                    fullName: 'tester'
                },
                avatarUri: 'http://blob/avatar.png'
            }
        });
        const msg = {
            id :'6',
            value: 'test',
            customData: {
                up: ['t@t.tt'],
                down: ['t@t.tt']
            }
        };
        const expected = {
            id :'6',
            value: 'test',
            customData: {
                up: [],
                down: []
            }
        }
        const convertNewMessage = ( () => (expected));
        const updateVotesOfMessage = updateVotesOfMessageFactory({
            votingMessage:() => Promise.resolve(expected),
            convertNewMessage
        });
        const dispatchable = updateVotesOfMessage(msg, 0);
        await dispatchable(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(startUpdatingMessage());
        expect(dispatch).toHaveBeenLastCalledWith(removeVote(expected, 't@t.tt'));
        done();
    });
});
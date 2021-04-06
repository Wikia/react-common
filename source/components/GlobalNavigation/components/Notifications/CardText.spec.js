import React from 'react';
import merge from 'lodash/merge';
import { render } from '@testing-library/react';

import { notificationTypes } from '../../models/notificationTypes';
import { useUserData } from '../../context/UserContext';

import CardText from './CardText';

const actorsMock = [
    {
        id: '12345',
        name: 'ATO<b>B</b>',
        avatarUrl: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
        profileUrl: 'http://localhost:6060/wiki/User:ATOB',
        src: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
    },
    {
        id: '54321',
        name: 'BTOA',
        avatarUrl: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
        profileUrl: 'http://localhost:6060/wiki/User:BTOA',
        src: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
    },
    {
        id: '23456',
        name: 'BLAH',
        avatarUrl: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
        profileUrl: 'http://localhost:6060/wiki/User:BLAH',
        src: 'https://static.wikia.nocookie.net/458a839b-8f84-42c2-b9d1-cf8c5a21bd75',
    },
];

jest.mock('../../context/UserContext', () => ({
    useUserData: jest.fn(),
}));

jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => [jest.fn((key, params) => `${key}${params ? JSON.stringify(params) : ''}`)],
}));

const defaultProps = {
    track: () => null,
    model: {
        communityId: '1619010',
        communityName: 'Xkxd Wiki',
        isUnread: false,
        latestActors: actorsMock,
        latestEventUri: 'http://xkxd.wikia.com/d/p/3100000000000001096/r/3086787452863005635',
        snippet: 'some snippet',
        timestamp: 1550663179,
        title: 'MOAR <b>LIKES</b>',
        type: notificationTypes.discussionReply,
        totalUniqueActors: actorsMock.length,
        uri: 'http://xkxd.wikia.com/d/p/3100000000000001096',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    const { container } = render(<CardText {...computedProps} />);

    return container.firstChild;
}

test('CardText renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('CardText renders correctly with unknown type', () => {
    expect(renderComponent({ model: { type: 'blah' } })).toMatchSnapshot();
});

describe('Announcement', () => {
    test('CardText renders correctly for announcement', () => {
        expect(renderComponent({ model: { type: notificationTypes.announcement } })).toMatchSnapshot();
    });
});

describe('Discussion reply', () => {
    test('CardText renders correctly for discussion reply with title and three actors', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionReply,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply with title and two actors', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionReply,
                latestActors: actorsMock.slice(0, 2),
                totalUniqueActors: 2,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply with title and one actor', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply with no title and three actors', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionReply,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply with no title and two actors', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionReply,
                latestActors: actorsMock.slice(0, 2),
                totalUniqueActors: 2,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply with no title and one actor', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });
});

describe('Discussion post upvote', () => {
    test('CardText renders correctly for discussion post upvote with title and three actors', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionUpvotePost,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion post upvote with title and one actor', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionUpvotePost,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion post upvote with no title and three actors', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionUpvotePost,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion post upvote with no title and one actor', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionUpvotePost,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });
});

describe('Discussion reply upvote', () => {
    test('CardText renders correctly for discussion reply upvote with title and three actors', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionUpvoteReply,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply upvote with title and one actor', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.discussionUpvoteReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply upvote with no title and three actors', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionUpvoteReply,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for discussion reply upvote with no title and one actor', () => {
        expect(renderComponent({
            model: {
                title: '',
                type: notificationTypes.discussionUpvoteReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
            },
        })).toMatchSnapshot();
    });
});

describe('Discussion at mentions', () => {
    test('CardText renders correctly for post at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.postAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Post with at <b>mention</b>',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for thread at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.threadAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Post with at <b>mention</b>',
            },
        })).toMatchSnapshot();
    });
});

describe('Article Comments', () => {
    test('CardText renders correctly for article comment reply', () => {
        const someMockAuthor = actorsMock[1];
        useUserData.mockReturnValue({ id: someMockAuthor.id });

        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                refersToAuthorId: someMockAuthor.id,
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for article comment reply (for followed comment)', () => {
        // Id that's not the same as in actorsMock[0].id
        useUserData.mockReturnValue({ id: '22222' });

        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReply,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                refersToAuthorId: '11111',
            },
        })).toMatchSnapshot();
    });
});

describe('Article Comments at mentions', () => {
    beforeEach(() => {
        useUserData.mockReturnValue({ id: '123' });
    });

    test('CardText renders correctly for article comment at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for article comment reply at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReplyAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for anon user', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReplyAtMention,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
            },
        })).toMatchSnapshot();
    });
});

describe('Wall thread', () => {
    beforeEach(() => {
        useUserData.mockReturnValue({ id: '123', username: 'Test' });
    });

    test('CardText renders correctly when metadata is missing', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallThread,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for own wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallThread,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test',
                metadata: { wallOwnerName: 'Test' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for others wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallThread,
                latestActors: [{ id: 321, name: 'Test2' }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test2',
                metadata: { wallOwnerName: 'Test2' },
            },
        })).toMatchSnapshot();
    });
});

describe('Wall post', () => {
    beforeEach(() => {
        useUserData.mockReturnValue({ id: '123', username: 'Test' });
    });

    test('CardText renders correctly when metadata is missing', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test',
                refersToAuthorName: 'Test',
                metadata: {},
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly when wall URL is invalid', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Test',
                refersToAuthorName: 'Test',
                metadata: {},
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for multiple replies on own wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 3,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test',
                refersToAuthorName: 'TestOther',
                metadata: { wallOwnerName: 'Test' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for reply to own message when multiple actors', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 3,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:TestOther',
                refersToAuthorName: 'Test',
                metadata: { wallOwnerName: 'TestOther' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for multiple replies on others wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 3,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:TestOther',
                refersToAuthorName: 'TestOther',
                metadata: { wallOwnerName: 'TestOther' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for single reply on own wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:Test',
                refersToAuthorName: 'TestOther',
                metadata: { wallOwnerName: 'Test' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for single reply to own message', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:TestOther',
                refersToAuthorName: 'Test',
                metadata: { wallOwnerName: 'TestOther' },
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for single reply on others wall', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.messageWallPost,
                latestActors: [{ id: 123, name: 'Test' }],
                totalUniqueActors: 1,
                title: 'Article <b>Title</b>',
                uri: 'https://elo.test.com/wiki/Message_Wall:TestOther',
                refersToAuthorName: 'TestOther',
                metadata: { wallOwnerName: 'TestOther' },
            },
        })).toMatchSnapshot();
    });
});

describe('Talk page', () => {
    test('CardText renders correctly', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.talkPageMessage,
                latestActors: [{ id: 123, name: 'Test' }],
            },
        })).toMatchSnapshot();
    });
});

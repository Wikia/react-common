import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import merge from 'lodash/merge';

import { notificationTypes } from '../../models/notificationTypes';
import { useUserData } from '../../context/UserContext';

import CardText from './CardText';

const actorsMock = [
    {
        id: '12345',
        name: 'ATOB',
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
        title: 'MOAR LIKES',
        type: notificationTypes.discussionReply,
        totalUniqueActors: actorsMock.length,
        uri: 'http://xkxd.wikia.com/d/p/3100000000000001096',
    },
};

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<CardText {...computedProps} />);

    return renderer.getRenderOutput();
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
                title: 'Post with at mention',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for thread at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.threadAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Post with at mention',
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
                title: 'Article Title',
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
                title: 'Article Title',
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
                title: 'Article Title',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for article comment reply at mention', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReplyAtMention,
                latestActors: actorsMock.slice(0, 1),
                totalUniqueActors: 1,
                title: 'Article Title',
            },
        })).toMatchSnapshot();
    });

    test('CardText renders correctly for anon user', () => {
        expect(renderComponent({
            model: {
                type: notificationTypes.articleCommentReplyAtMention,
                latestActors: [{ id: 0, name: null }],
                totalUniqueActors: 1,
                title: 'Article Title',
            },
        })).toMatchSnapshot();
    });
});

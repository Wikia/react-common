import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import merge from 'lodash/merge';

import { notificationTypes } from '../../models/notificationTypes';

import Card from './Card';

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
    }
];

const defaultProps = {
    track: () => null,
    model: {
        communityId: '1619010',
        communityName: 'Xkxd Wiki',
        isUnread: false,
        latestActors: actorsMock,
        latestEventUri: 'http://xkxd.wikia.com/d/p/3100000000000001096/r/3086787452863005635',
        snippet: 'snippet',
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

    renderer.render(<Card {...computedProps} />);

    return renderer.getRenderOutput();
}

test('Card renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('Card renders correctly with isUnread set to true', () => {
    expect(renderComponent({ model: { isUnread: true } })).toMatchSnapshot();
});

test('Card renders correctly with two actors', () => {
    expect(renderComponent({ model: { latestActors: actorsMock.slice(0, 2) } })).toMatchSnapshot();
});

test('Card renders correctly with no title', () => {
    expect(renderComponent({ model: { title: '' } })).toMatchSnapshot();
});

test('Card renders correctly with no title and announcement type', () => {
    expect(renderComponent({ model: { title: '', type: notificationTypes.announcement } })).toMatchSnapshot();
});

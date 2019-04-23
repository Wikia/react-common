import { shallow } from 'enzyme';
import React from 'react';
import merge from 'lodash/merge';

import AvatarStack from './index';

const defaultProps = {
    avatars: [
        { src: 'some.url', alt: 'User', link: 'some.link', badge: 'sysop' },
        { src: 'some.other.url', alt: 'Other user', link: 'some.other.link' },
    ],
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<AvatarStack {...computedProps} />);
}

test('AvatarStack renders with default props', () => {
    const wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
});

test('AvatarStack renders with overrideCount', () => {
    const wrapper = renderComponent({ overrideCount: 1 });

    expect(wrapper).toMatchSnapshot();
});

test('AvatarStack renders when there are less avatars than specified by maxStackSize', () => {
    const wrapper = renderComponent({ maxStackSize: 3 });

    expect(wrapper).toMatchSnapshot();
});

test('AvatarStack renders when there are more avatars than specified by maxStackSize', () => {
    const wrapper = renderComponent({ maxStackSize: 1 });

    expect(wrapper).toMatchSnapshot();
});

test('AvatarStack renders with hideOverflow set to true', () => {
    const wrapper = renderComponent({ hideOverflow: true, maxStackSize: 1 });

    expect(wrapper).toMatchSnapshot();
});

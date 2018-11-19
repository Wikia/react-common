import React from 'react';
import renderer from 'react-test-renderer';
import {
    shallow,
} from 'enzyme';

import Dropdown from './index';

/* eslint-disable no-alert */

test('Dropdown renders correctly with default values', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown renders correctly with DropdownToggle and children', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown sets isClicked on click on touch device', () => {
    const wrapper = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>,
    );

    wrapper.setState({
        isTouchDevice: true,
    });

    wrapper.find('.wds-dropdown').simulate('click', {
        preventDefault: () => {},
    });

    expect(wrapper.state('isClicked')).toEqual(true);
});

test('Dropdown does not set isClicked on click on non-touch device', () => {
    const wrapper = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>,
    );

    wrapper.setState({
        isTouchDevice: false,
    });

    wrapper.find('.wds-dropdown').simulate('click', {
        preventDefault: () => {},
    });

    expect(wrapper.state('isClicked')).toEqual(false);
});

test('Dropdown sets isClicked to false on mouseLeave on touch device', () => {
    const wrapper = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>,
    );
    wrapper.setState({
        isClicked: true,
        isTouchDevice: true,
    });

    wrapper.find('.wds-dropdown').simulate('mouseLeave');

    expect(wrapper.state('isClicked')).toEqual(false);
});

test('Dropdown does not set isClicked to false on mouseLeave on touch device', () => {
    const wrapper = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>,
    );
    wrapper.setState({
        isClicked: true,
        isTouchDevice: false,
    });

    wrapper.find('.wds-dropdown').simulate('mouseLeave');

    expect(wrapper.state('isClicked')).toEqual(true);
});

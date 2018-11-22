import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DropdownToggle from './index';

/* eslint-disable no-alert */

test('DropdownToggle renders correctly with default values', () => {
    const component = renderer.create(
        <DropdownToggle />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with default values for level 2', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional attrs', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 attrs={{ attr1: true }} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional classNames', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 classes="first-class second-class" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly when shouldNotWrap is set', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 shouldNotWrap />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with Text inside', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent="My toggle content" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a component inside', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent={<div>My toggle content</div>} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a function passed as toggle', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent={(icon) => <div>My toggle content {icon}</div>} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with href passed in attrs', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent="My toggle content" attrs={{href: '#'}} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with href passed in attrs', () => {
    const component = shallow(
        <DropdownToggle toggleContent="My toggle content" attrs={{href: '#'}} isTouchDevice={true} />
    );
    const preventDefaultMock = sinon.spy();

    component.simulate('click', { preventDefault: preventDefaultMock });

    expect(preventDefaultMock.called).toBe(true);
});

test('DropdownToggle renders correctly with href passed in attrs', () => {
    const component = shallow(
        <DropdownToggle toggleContent="My toggle content" attrs={{href: '#'}} isTouchDevice={false} />
    );
    const preventDefaultMock = sinon.spy();

    component.simulate('click', { preventDefault: preventDefaultMock });

    expect(preventDefaultMock.called).toBe(false);
});

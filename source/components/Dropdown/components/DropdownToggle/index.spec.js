import React from 'react';
import renderer from 'react-test-renderer';

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
        <DropdownToggle isLevel2 attrs={{attr1: true}}/>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional classNames', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 classes="first-class second-class"/>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly when shouldNotWrap is set', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 shouldNotWrap />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle ', () => {
    const component = renderer.create(
        <DropdownToggle />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with Text inside', () => {
    const component = renderer.create(
        <DropdownToggle>Content</DropdownToggle>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a component inside', () => {
    const component = renderer.create(
        <DropdownToggle>
            <span>Content</span>
        </DropdownToggle>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

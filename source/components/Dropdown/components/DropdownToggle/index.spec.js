import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DropdownToggle from './index';

/* eslint-disable no-alert */

test('DropdownToggle renders correctly with default values', () => {
    const component = renderer.create(
        <DropdownToggle onClick={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with default values for level 2', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 onClick={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional attrs', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 attrs={{ attr1: true }} onClick={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional classNames', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 classes="first-class second-class" onClick={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly when shouldNotWrap is set', () => {
    const component = renderer.create(
        <DropdownToggle isLevel2 shouldNotWrap onClick={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with Text inside', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent="My toggle content" onClick={() => {}} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a component inside', () => {
    const component = renderer.create(
        <DropdownToggle toggleContent={<div>My toggle content</div>} onClick={() => {}} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a function passed as toggle', () => {
    const component = renderer.create(
        <DropdownToggle
            toggleContent={icon => (
                <div>
                    My toggle content
                    {icon}
                </div>
            )}
            onClick={() => {}}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle renders correctly with href passed in attrs', () => {
    const component = renderer.create(
        <DropdownToggle
            toggleContent="My toggle content"
            attrs={{ href: '#' }}
            onClick={() => {}}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownToggle triggers onClick from props when clicked', () => {
    const onClickMock = sinon.spy();
    const component = shallow(
        <DropdownToggle
            toggleContent="My toggle content"
            attrs={{ href: '#' }}
            isTouchDevice
            onClick={onClickMock}
        />
    );

    component.simulate('click');

    expect(onClickMock.called).toBe(true);
});

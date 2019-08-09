import React from 'react';
import sinon from 'sinon';

import DropdownToggle from './DropdownToggle';

/* eslint-disable no-alert */

test('DropdownToggle renders correctly with default values', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle onClick={() => { }} toggleContent="" iconName="menu-control-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with dropdown-tiny icon', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle onClick={() => { }} toggleContent="" iconName="dropdown-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with default values for level 2', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle isLevel2 onClick={() => { }} toggleContent="" iconName="menu-control-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional attrs', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle isLevel2 attrs={{ attr1: 'true' }} onClick={() => { }} toggleContent="" iconName="menu-control-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with additional classNames', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle isLevel2 classes="first-class second-class" onClick={() => { }} toggleContent="" iconName="menu-control-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly when shouldNotWrap is set', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle isLevel2 shouldNotWrap onClick={() => { }} toggleContent="" iconName="menu-control-tiny" />,
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with Text inside', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle toggleContent="My toggle content" onClick={() => { }} iconName="menu-control-tiny" />
    );
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a component inside', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle toggleContent={<div>My toggle content</div>} onClick={() => { }} iconName="menu-control-tiny" />
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with a function passed as toggle', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle
            toggleContent={icon => (
                <div>
                    My toggle content
                    {icon}
                </div>
            )}
            onClick={() => { }}
            iconName="menu-control-tiny"
        />
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle renders correctly with href passed in attrs', () => {
    const component = mountWithThemeProvider(
        <DropdownToggle
            toggleContent="My toggle content"
            attrs={{ href: '#' }}
            onClick={() => { }}
            iconName="menu-control-tiny"
        />
    ).find(DropdownToggle);
    expect(component).toMatchSnapshot();
});

test('DropdownToggle triggers onClick from props when clicked', () => {
    const onClickMock = sinon.spy();
    const component = mountWithThemeProvider(
        <DropdownToggle
            toggleContent="My toggle content"
            attrs={{ href: '#' }}
            isTouchDevice
            onClick={onClickMock}
            iconName="menu-control-tiny"
        />
    ).find(DropdownToggle);

    component.simulate('click');

    expect(onClickMock.called).toBe(true);
});

import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import {
    shallow,
    mount,
} from 'enzyme';

import Dropdown from './index';

/* eslint-disable no-alert */

test('Dropdown renders correctly with default values', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown level2 renders correctly with default values', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" isLevel2 />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown level2 renders correctly with href set', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" isLevel2 attrs={{ href: '#' }} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown level2 renders correctly with isStickedToParent set', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" isLevel2 isStickedToParent />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown level2 renders correctly with isActive set', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" isLevel2 isActive />,
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

test('Dropdown renders correctly with DropdownToggle, toggleIconName and children', () => {
    const component = renderer.create(
        <Dropdown toggle="Toggle" toggleIconName="my-icon-name">
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

test('onToggleClicked runs handleClick with an event and a bool flagset to true', () => {
    const handleClickMock = sinon.spy();
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.instance().handleClick = handleClickMock;
    component.instance().onToggleClicked(eventMock);

    expect(handleClickMock.calledWith(true, eventMock)).toBe(true);
});

test('onClick runs handleClick with a bool flag set to false', () => {
    const handleClickMock = sinon.spy();
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.instance().handleClick = handleClickMock;
    component.instance().onClick();

    expect(handleClickMock.calledWith(false)).toBe(true);
});

test('handleClick changes isClicked state on touch device', () => {
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: true });

    component.instance().handleClick(true, eventMock);

    expect(component.state('isClicked')).toBe(true);
});

test('handleClick does not change isClicked state on non-touch device', () => {
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: false });

    component.instance().handleClick(true, eventMock);

    expect(component.state('isClicked')).toBe(false);
});

test('handleClick calls event methods when passed true as an argument', () => {
    const eventMock = { preventDefault: sinon.spy(), stopPropagation: sinon.spy() };
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: true });

    component.instance().handleClick(true, eventMock);

    expect(eventMock.preventDefault.called).toBe(true);
    expect(eventMock.stopPropagation.called).toBe(true);
});

test('handleClick calls onClose from props if dropdown is closing on mobile', () => {
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const onCloseMock = sinon.spy();
    const component = shallow(
        <Dropdown toggle="Toggle" onClose={onCloseMock}>
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: true, isClicked: true });

    component.instance().handleClick(true, eventMock);

    expect(onCloseMock.called).toBe(true);
});

test('handleClick calls default onClose if dropdown is closing on mobile', () => {
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const onCloseMock = sinon.spy();

    Dropdown.defaultProps.onClose = onCloseMock;
    const component = shallow(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: true, isClicked: true });

    component.instance().handleClick(true, eventMock);

    expect(onCloseMock.called).toBe(true);
});

test('handleClick does not call onClose from props if dropdown is closing on desktop', () => {
    const eventMock = { preventDefault: () => {}, stopPropagation: () => {} };
    const onCloseMock = sinon.spy();
    const component = shallow(
        <Dropdown toggle="Toggle" onClose={onCloseMock}>
            <div>Content</div>
        </Dropdown>
    );

    component.setState({ isTouchDevice: false, isClicked: true });

    component.instance().handleClick(true, eventMock);

    expect(onCloseMock.called).toBe(false);
});

test('Dropdown does not have class `wds-is-flipped` applied when canFlip is not', () => {
    const component = mount(
        <Dropdown toggle="Toggle">
            <div>Content</div>
        </Dropdown>
    );

    component.instance().contentElementRef.current.getBoundingClientRect = () => ({
        bottom: 800,
    });

    component.simulate('mouseEnter');

    expect(component.find('.wds-dropdown').hasClass('wds-is-flipped')).toBe(false);
});


test('Dropdown has class `wds-is-flipped` applied when canFlip is set and it is near the bottom of the viewport', () => {
    const component = mount(
        <Dropdown toggle="Toggle" canFlip>
            <div>Content</div>
        </Dropdown>
    );

    component.instance().contentElementRef.current.getBoundingClientRect = () => ({
        bottom: 800,
    });

    component.simulate('mouseEnter');

    expect(component.find('.wds-dropdown').hasClass('wds-is-flipped')).toBe(true);

    component.simulate('mouseLeave');

    expect(component.find('.wds-dropdown').hasClass('wds-is-flipped')).toBe(false);
});

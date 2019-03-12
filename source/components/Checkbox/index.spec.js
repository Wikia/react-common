import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Checkbox from './index';

/* eslint-disable no-alert */

test('Checkbox renders correctly with default values', () => {
    const component = renderer.create(
        <Checkbox onChange={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Checkbox renders correctly checked (and with label and class name)', () => {
    const component = renderer.create(
        <Checkbox checked onChange={() => {}} className="checked-box">a Checkbox</Checkbox>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Checkbox renders correctly when disabled', () => {
    const component = renderer.create(
        <Checkbox disabled onChange={() => {}}>disabled checkbox</Checkbox>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});


test('Checkbox is not clickable when disabled', () => {
    const mockonChange = sinon.spy();
    const wrapper = shallow(
        <Checkbox disabled onChange={mockonChange}>disabled</Checkbox>
    );

    wrapper.find('input').simulate('click');

    expect(mockonChange.notCalled).toBe(true);
});

test('Checkbox triggers onChange event', () => {
    const mockonChange = sinon.spy();
    const wrapper = shallow(
        <Checkbox onChange={mockonChange}>clickable</Checkbox>
    );

    wrapper.find('input').simulate('change');

    expect(mockonChange.calledOnce).toBe(true);
});

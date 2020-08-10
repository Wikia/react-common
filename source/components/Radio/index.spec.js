import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Radio from './index';

/* eslint-disable no-alert */

test('Radio renders correctly with default values', () => {
    const component = renderer.create(
        <Radio value="val" onChange={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Radio renders correctly checked (and with label and class name)', () => {
    const component = renderer.create(
        <Radio value="val" checked onChange={() => {}} className="checked-box">a Radio</Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Radio renders correctly when disabled', () => {
    const component = renderer.create(
        <Radio value="val" disabled onChange={() => {}}>disabled radio</Radio>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});


test('Radio is not clickable when disabled', () => {
    const mockonChange = sinon.spy();
    const wrapper = shallow(
        <Radio value="val" disabled onChange={mockonChange}>disabled</Radio>
    );

    wrapper.find('input').simulate('click');

    expect(mockonChange.notCalled).toBe(true);
});

test('Radio triggers onChange event', () => {
    const mockonChange = sinon.spy();
    const wrapper = shallow(
        <Radio value="val" onChange={mockonChange}>clickable</Radio>
    );

    wrapper.find('input').simulate('change');

    expect(mockonChange.calledOnce).toBe(true);
});

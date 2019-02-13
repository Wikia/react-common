import { mount } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import Switch from './index';

test('Switch renders', () => {
    const component = mount(
        <Switch.Wrapper>
            <Switch.Item active>Foo</Switch.Item>
            <Switch.Item>Bar</Switch.Item>
        </Switch.Wrapper>
    );
    expect(component).toMatchSnapshot();
});

test('Switch renders custom class names', () => {
    const component = mount(
        <Switch.Wrapper className="foo">
            <Switch.Item className="foo">Item 1</Switch.Item>
            <Switch.Item className="bar" active>Bar</Switch.Item>
        </Switch.Wrapper>
    );
    expect(component).toMatchSnapshot();
});

test('Switch.Item onClick', () => {
    const mockOnClick = sinon.spy();
    const wrapper = mount(
        <Switch.Item onClick={mockOnClick}>clickable</Switch.Item>
    );

    wrapper.find('button').simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
});

import React from 'react';
import sinon from 'sinon';

import StyledTag from './index';

/* eslint-disable no-alert */

test('StyledTag renders correctly with default values', () => {
    const component = mountWithThemeProvider(
        <StyledTag tag="foo" />,
    ).find(StyledTag);

    expect(component).toMatchSnapshot();
});

test('StyledTag renders correctly as secondary and removable', () => {
    const component = mountWithThemeProvider(
        <StyledTag tag="foo" secondary removable />,
    ).find(StyledTag);

    expect(component).toMatchSnapshot();
});

test('StyledTag onClick is clickable', () => {
    const mockOnClick = sinon.spy();
    const wrapper = mountWithThemeProvider(
        <StyledTag tag="foo" onClick={mockOnClick} />,
    ).find(StyledTag);

    wrapper.find('span').simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
});

test('StyledTag onRemove is clickable', () => {
    const onRemove = sinon.spy();
    const wrapper = mountWithThemeProvider(
        <StyledTag tag="foo" onRemove={onRemove} removable />,
    ).find(StyledTag);

    wrapper.find('StyledTag__Icon').simulate('click');

    expect(onRemove.calledOnce).toBe(true);
});

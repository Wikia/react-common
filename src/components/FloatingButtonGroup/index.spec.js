import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FloatingButton from '../FloatingButton';

import FloatingButtonGroup from './index';

/* eslint-disable no-alert */

test('FloatingButtonGroup renders correctly empty', () => {
    const component = renderer.create(
        <FloatingButtonGroup />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButtonGroup renders correctly with a child (horizontal)', () => {
    const component = renderer.create(
        <FloatingButtonGroup>
            <FloatingButton>A</FloatingButton>
        </FloatingButtonGroup>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButtonGroup renders correctly with a child (vertical)', () => {
    const component = renderer.create(
        <FloatingButtonGroup vertical>
            <FloatingButton>A</FloatingButton>
        </FloatingButtonGroup>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

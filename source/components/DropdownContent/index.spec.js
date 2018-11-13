import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DropdownContent from './index';

/* eslint-disable no-alert */

test('DropdownContent renders correctly with default values', () => {
    const component = renderer.create(
        <DropdownContent />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownContent renders correctly with Text inside', () => {
    const component = renderer.create(
        <DropdownContent>Content</DropdownContent>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownContent renders correctly with a component inside', () => {
    const component = renderer.create(
        <DropdownContent>
            <div>Content</div>
        </DropdownContent>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

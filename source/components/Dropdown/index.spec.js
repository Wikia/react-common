import React from 'react';
import renderer from 'react-test-renderer';

import Dropdown from './index';
import {DropdownToggle, DropdownContent} from './index';

/* eslint-disable no-alert */

test('Dropdown renders correctly with default values', () => {
    const component = renderer.create(
        <Dropdown />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Dropdown renders correctly with DropdownToggle and DropdownContent', () => {
    const component = renderer.create(
        <Dropdown>
            <DropdownToggle>Toggle</DropdownToggle>
            <DropdownContent>Content</DropdownContent>
        </Dropdown>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

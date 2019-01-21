import React from 'react';
import renderer from 'react-test-renderer';

import DropdownContent from './index';

const ref = React.createRef();

/* eslint-disable no-alert */

test('DropdownContent renders correctly with default values', () => {
    const component = renderer.create(
        <DropdownContent elementRef={ref} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownContent renders correctly with Text inside', () => {
    const component = renderer.create(
        <DropdownContent elementRef={ref}>Content</DropdownContent>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownContent renders correctly with a component inside', () => {
    const component = renderer.create(
        <DropdownContent elementRef={ref}>
            <div>Content</div>
        </DropdownContent>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

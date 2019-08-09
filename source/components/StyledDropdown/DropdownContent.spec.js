import React from 'react';

import DropdownContent from './DropdownContent';

const ref = React.createRef();

test('DropdownContent renders correctly with default values', () => {
    const component = mountWithThemeProvider(
        <DropdownContent elementRef={ref} />,
    ).find(DropdownContent);

    expect(component).toMatchSnapshot();
});

test('DropdownContent renders correctly with Text inside', () => {
    const component = mountWithThemeProvider(
        <DropdownContent elementRef={ref}>Content</DropdownContent>
    ).find(DropdownContent);

    expect(component).toMatchSnapshot();
});

test('DropdownContent renders correctly with a component inside', () => {
    const component = mountWithThemeProvider(
        <DropdownContent elementRef={ref}>
            <div>Content</div>
        </DropdownContent>
    ).find(DropdownContent);

    expect(component).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';

import SearchToggle from './SearchToggle';

function renderComponent(props, options = {}) {
    const computedProps = {
        onClick: () => null,
        ...props,
    };

    return shallow(<SearchToggle {...computedProps} />, options);
}

test('SearchToggle renders', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
});

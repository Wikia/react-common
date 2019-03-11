import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import SearchModal from './SearchModal';

const defaultProps = {
    openModal: () => null,
    children: <div>YES, I AM A CHILD</div>,
    isOpen: false,
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<SearchModal {...computedProps} />);
}

test('SearchModal renders correctly when isOpen is false', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('SearchModal renders correctly when isOpen is true', () => {
    expect(renderComponent({ isOpen: true })).toMatchSnapshot();
});

test('SearchModal calls openModal onClick', () => {
    const openModalSpy = jest.fn();
    const wrapper = renderComponent({ openModal: openModalSpy });

    wrapper.find('Button').props().onClick();

    expect(openModalSpy).toBeCalledWith('search');
});

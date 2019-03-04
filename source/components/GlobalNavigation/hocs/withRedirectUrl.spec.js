import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import withRedirectUrl from './withRedirectUrl';

const defaultProps = {
    data: {},
    openModal: () => null,
    track: () => null,
    isOpen: false,
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);
    const Component = withRedirectUrl(() => <div>HAI!</div>);

    return shallow(<Component {...computedProps} />, { disableLifecycleMethods: true });
}

test('Wrapped component renders correctly', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('Wrapped component updates state on componentDidMount', () => {
    const wrapper = renderComponent();

    expect(wrapper.state('redirectUrl')).toBe('https://fandom.com');

    wrapper.instance().componentDidMount();

    expect(wrapper.state('redirectUrl')).toBe(window.location.href);
});

test('Wrapped component returns url from it\'s getUrlWithRedirect prop', () => {
    const urlMock = 'https://wikia.com';
    const redirectMock = 'mockValue';
    const wrapper = renderComponent().setState({ redirectUrl: 'mockValue' });

    expect(wrapper.props().getUrlWithRedirect(urlMock, 'blah')).toBe(`${urlMock}/?blah=${redirectMock}`);
});

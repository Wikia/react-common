import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import GlobalNavigation from './index';

const defaultProps = {
    model: {
        logo: {
            type: 'link-image',
            href: '//fandom.wikia.com/',
            'image-data': { type: 'wds-svg', name: 'wds-company-logo-fandom-white' },
            'tracking-label': 'logo',
        },
        search: { search: 'mock' },
        'create-wiki': { 'create-wiki': 'mock' },
        'main-navigation': [{
            type: 'link-text',
            title: { type: 'translatable-text', key: 'global-navigation-fandom-overview-link-vertical-games' },
            href: '//fandom.wikia.com/topics/games',
            'tracking-label': 'link.games',
        }, {
            type: 'link-other',
            title: { type: 'translatable-text', key: 'global-navigation-fandom-overview-link-vertical-games' },
            href: '//fandom.wikia.com/topics/games',
            'tracking-label': 'link.blah',
        }, {
            type: 'link-group',
            title: { type: 'translatable-text', key: 'global-navigation-wikis-header' },
            'tracking-label': 'link.wikis',
            items: [{
                type: 'link-text',
                title: { type: 'translatable-text', key: 'global-navigation-wikis-explore' },
                href: '//fandom.wikia.com/explore',
                'tracking-label': 'link.explore',
            }],
        }],
        user: { user: 'mock' },
        notifications: { notifications: 'mock' },
        'services-domain': 'https://services.wikia.com/',
        'partner-slot': { partner: 'mock' },
    },
    siteName: { siteName: 'mock' },
    i18nNamespace: 'designSystem',
};

function renderComponent(props, options = {}) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<GlobalNavigation {...computedProps} />, { disableLifecycleMethods: true, ...options });
}

describe('render', () => {
    test('GlobalNavigation renders correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });

    test('GlobalNavigation renders correctly when user or partnerSlot are not defined', () => {
        expect(renderComponent({ model: { user: null, 'partner-slot': null } })).toMatchSnapshot();
    });
});

describe('componentDidMount / componentWillUnmount', () => {
    test('sets communityBar property properly, handles event listeners', () => {
        const elMock = document.createElement('div');
        const addEventListenerMock = jest.fn();
        const removeEventListenerMock = jest.fn();
        const onScrollMock = jest.fn();
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        global.document.querySelector = () => elMock;
        global.window.addEventListener = addEventListenerMock;
        global.window.removeEventListener = removeEventListenerMock;
        instance.onScroll = onScrollMock;

        instance.componentDidMount();

        expect(instance.communityBar).toBe(elMock);
        expect(addEventListenerMock).toBeCalledWith('scroll', onScrollMock);

        instance.componentWillUnmount();

        expect(removeEventListenerMock).toBeCalledWith('scroll', onScrollMock);
    });
});

describe('onRedirectToSearchResults', () => {
    test('calls methods', () => {
        const closeAndDeactivateMock = jest.fn();
        const goToSearchResultsMock = jest.fn();
        const queryMock = 'queryMock';
        const wrapper = renderComponent({ goToSearchResults: goToSearchResultsMock });
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onRedirectToSearchResults(queryMock);

        expect(closeAndDeactivateMock).toBeCalledWith();
        expect(goToSearchResultsMock).toBeCalledWith(queryMock);
    });

    test('calls default prop when goToSearchResults is not passed', () => {
        const closeAndDeactivateMock = jest.fn();
        const queryMock = 'queryMock';
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onRedirectToSearchResults(queryMock);

        expect(closeAndDeactivateMock).toBeCalledWith();
    });
});

describe('onSearchActivation', () => {
    test('calls methods, updates state', () => {
        const onSearchToggleClickedMock = jest.fn();
        const wrapper = renderComponent({ onSearchToggleClicked: onSearchToggleClickedMock });
        const instance = wrapper.instance();

        instance.onSearchActivation();

        expect(wrapper.state('isSearchExpanded')).toBe(true);
        expect(onSearchToggleClickedMock).toBeCalledWith();
    });

    test('calls default prop when onSearchToggleClicked is not passed, updates state', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.onSearchActivation();

        expect(wrapper.state('isSearchExpanded')).toBe(true);
    });
});

describe('onSearchClose', () => {
    test('calls methods', () => {
        const closeAndDeactivateMock = jest.fn();
        const onSearchCloseClickedMock = jest.fn();
        const wrapper = renderComponent({ onSearchCloseClicked: onSearchCloseClickedMock });
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onSearchClose();

        expect(closeAndDeactivateMock).toBeCalledWith();
        expect(onSearchCloseClickedMock).toBeCalledWith();
    });

    test('calls default prop when onSearchCloseClicked is not passed', () => {
        const closeAndDeactivateMock = jest.fn();
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onSearchClose();

        expect(closeAndDeactivateMock).toBeCalledWith();
    });
});

describe('onSearchSuggestionChosen', () => {
    test('calls methods', () => {
        const argsMock = ['suggestion', [], 123];
        const closeAndDeactivateMock = jest.fn();
        const onSearchSuggestionChosenMock = jest.fn();
        const wrapper = renderComponent({ onSearchSuggestionChosen: onSearchSuggestionChosenMock });
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onSearchSuggestionChosen(...argsMock);

        expect(closeAndDeactivateMock).toBeCalledWith();
        expect(onSearchSuggestionChosenMock).toBeCalledWith(...argsMock);
    });

    test('calls default prop when onSearchSuggestionChosen is not passed', () => {
        const argsMock = ['suggestion', [], 123];
        const closeAndDeactivateMock = jest.fn();
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.closeAndDeactivate = closeAndDeactivateMock;

        instance.onSearchSuggestionChosen(...argsMock);

        expect(closeAndDeactivateMock).toBeCalledWith();
    });
});

describe('onSearchSuggestionsImpression', () => {
    test('calls methods', () => {
        const argsMock = [[], 123];
        const onSearchSuggestionsImpressionMock = jest.fn();
        const wrapper = renderComponent({ onSearchSuggestionsImpression: onSearchSuggestionsImpressionMock });
        const instance = wrapper.instance();

        instance.onSearchSuggestionsImpression(...argsMock);

        expect(onSearchSuggestionsImpressionMock).toBeCalledWith(...argsMock);
    });

    test('calls default prop when onSearchSuggestionsImpression is not passed', () => {
        const argsMock = [[], 123];
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.onSearchSuggestionsImpression(...argsMock);

        // no expect
    });
});

describe('onTrackingLabelClick', () => {
    test('calls track prop when clicked element has some parent with proper attribute', () => {
        const trackMock = jest.fn();
        const eventMock = { target: { closest: () => ({ getAttribute: () => 'blah' }) } };
        const wrapper = renderComponent({ track: trackMock });
        const instance = wrapper.instance();

        instance.onTrackingLabelClick(eventMock);

        expect(trackMock).toBeCalledWith(expect.any(Object));
    });

    test('calls default prop when track is not passed and clicked element has some parent with proper attribute', () => {
        const eventMock = { target: { closest: () => ({ getAttribute: () => 'blah' }) } };
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.onTrackingLabelClick(eventMock);

        // no expect
    });

    test('does not call track prop when clicked element does not have any parent with proper attribute', () => {
        const trackMock = jest.fn();
        const eventMock = { target: { closest: () => null } };
        const wrapper = renderComponent({ track: trackMock });
        const instance = wrapper.instance();

        instance.onTrackingLabelClick(eventMock);

        expect(trackMock).not.toBeCalled();
    });
});

describe('onScroll', () => {
    test('does not update state when communityBar element does not exist', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.communityBar = null;
        instance.setState = jest.fn();

        instance.onScroll();

        expect(instance.setState).not.toBeCalled();
    });

    test('does not update state when isCommunityBarActive is false and view is scrolled above that element', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.communityBar = { getBoundingClientRect: () => ({ top: 10 }) };
        instance.nav = { current: { getBoundingClientRect: () => ({ top: 0 }) } };
        instance.setState = jest.fn();

        instance.onScroll();

        expect(instance.setState).not.toBeCalled();
    });

    test('updates state when communityBar element exist and view is scrolled below that element', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.communityBar = { getBoundingClientRect: () => ({ top: -10 }) };
        instance.nav = { current: { getBoundingClientRect: () => ({ top: 0 }) } };

        instance.onScroll();

        expect(wrapper.state('isCommunityBarActive')).toBe(true);
    });

    test('updates state when communityBar element exist and view is scrolled above that element', () => {
        const wrapper = renderComponent().setState({ isCommunityBarActive: true });
        const instance = wrapper.instance();

        instance.communityBar = { getBoundingClientRect: () => ({ top: 10 }) };
        instance.nav = { current: { getBoundingClientRect: () => ({ top: 0 }) } };

        instance.onScroll();

        expect(wrapper.state('isCommunityBarActive')).toBe(false);
    });
});

describe('closeAndDeactivate', () => {
    test('updates state', () => {
        const stateMock = { isSearchModalOpen: true, isUserModalOpen: true, isSearchExpanded: true };
        const wrapper = renderComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.closeAndDeactivate();

        expect(wrapper.state('isSearchModalOpen')).toBe(false);
        expect(wrapper.state('isUserModalOpen')).toBe(false);
        expect(wrapper.state('isSearchExpanded')).toBe(false);
    });
});

describe('openModal', () => {
    test('calls onModalOpen prop and updates state when "search" type is passed', () => {
        const onModalOpenMock = jest.fn();
        const typeMock = 'search';
        const wrapper = renderComponent({ onModalOpen: onModalOpenMock });
        const instance = wrapper.instance();

        instance.openModal(typeMock);

        expect(wrapper.state('isSearchModalOpen')).toBe(true);
        expect(onModalOpenMock).toBeCalledWith(typeMock);
    });

    test('calls onModalOpen prop and updates state when "user" type is passed', () => {
        const onModalOpenMock = jest.fn();
        const typeMock = 'user';
        const wrapper = renderComponent({ onModalOpen: onModalOpenMock });
        const instance = wrapper.instance();

        instance.openModal(typeMock);

        expect(wrapper.state('isUserModalOpen')).toBe(true);
        expect(onModalOpenMock).toBeCalledWith(typeMock);
    });

    test('calls default prop when onModalOpen is not passed', () => {
        const typeMock = 'user';
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.openModal(typeMock);

        expect(wrapper.state('isUserModalOpen')).toBe(true);
    });
});

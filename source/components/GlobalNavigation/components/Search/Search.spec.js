import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import Search from './Search';

const defaultProps = {
    isSearchExpanded: false,
    model: {
        type: 'search',
        results: {
            'tracking-label': 'search',
            'param-name': 'query',
            url: '//starwars.wikia.com/wiki/Special:Search',
        },
        'placeholder-inactive': {
            type: 'translatable-text',
            key: 'global-navigation-search-placeholder-inactive',
        },
        'placeholder-active': {
            type: 'translatable-text',
            key: 'global-navigation-search-placeholder-in-wiki',
            params: {
                sitename: {
                    type: 'text',
                    value: 'Wookieepedia',
                },
            },
        },
        suggestions: {
            url: '/mocks/searchSuggestions.json?',
            'param-name': 'query',
            'tracking-label': 'search-suggestion',
        },
    },
    onRedirectToSearchResults: () => null,
    onSearchActivation: () => null,
    onSearchClose: () => null,
    onSearchSuggestionChosen: () => null,
    onSearchSuggestionsImpression: () => null,
    t: () => null,
    track: () => null,
};

function renderShallowComponent(props, options = {}) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<Search {...computedProps} />, options);
}

jest.mock('../../../../utils/uuidv4', () => () => 'imma-very-unique');
jest.mock('lodash/debounce', () => func => func);
global.console.error = () => null;

describe('render', () => {
    test('Search renders correctly with default props', () => {
        expect(renderShallowComponent()).toMatchSnapshot();
    });

    test('Search renders correctly with suggestions and query', () => {
        const stateMock = { suggestions: ['Harry Pottah', 'Frodo', 'Your mom'], query: 'Harr' };
        const wrapper = renderShallowComponent().setState(stateMock);

        expect(wrapper).toMatchSnapshot();
    });
});

describe('componentDidMount / componentWillUnmount', () => {
    test('sets isMounted flag properly', () => {
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        expect(instance.isMounted).toBe(true);

        wrapper.unmount();

        expect(instance.isMounted).toBe(false);
    });

    test('focus input when inSearchModal flag is passed as true', () => {
        const focusMock = jest.fn();
        const wrapper = renderShallowComponent({ inSearchModal: true }, { disableLifecycleMethods: true });
        const instance = wrapper.instance();

        instance.input = { current: { focus: focusMock } };

        instance.componentDidMount();

        expect(focusMock).toBeCalledWith();
    });
});

describe('onBlur', () => {
    test('does not call onSearchClose when query in state has some length', () => {
        const wrapper = renderShallowComponent().setState({ query: 'hai!' });
        const instance = wrapper.instance();
        const onSearchCloseMock = jest.fn();

        instance.onSearchClose = onSearchCloseMock;

        instance.onBlur();

        expect(onSearchCloseMock).not.toBeCalledWith();
    });

    test('calls onSearchClose when query in state has some length', () => {
        const wrapper = renderShallowComponent().setState({ query: '' });
        const instance = wrapper.instance();
        const onSearchCloseMock = jest.fn();

        instance.onSearchClose = onSearchCloseMock;

        instance.onBlur();

        expect(onSearchCloseMock).toBeCalledWith();
    });
});

describe('onFocus', () => {
    test('updates state on call', () => {
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        expect(wrapper.state('inputFocused')).toBe(false);

        instance.onFocus();

        expect(wrapper.state('inputFocused')).toBe(true);
    });
});

describe('onKeyDown', () => {
    test('calls stopPropagation on passed event', () => {
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();
        const eventMock = { stopPropagation: jest.fn(), keyCode: 0 };

        instance.onKeyDown(eventMock);

        expect(eventMock.stopPropagation).toBeCalledWith();
    });

    describe('down arrow', () => {
        const KEY_CODE = 40;

        test('updates state when condition applies', () => {
            const stateMock = { selectedSuggestionIndex: 1, suggestions: ['a', 'b', 'c'] };
            const wrapper = renderShallowComponent().setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            expect(wrapper.state('selectedSuggestionIndex')).toBe(1);

            instance.onKeyDown(eventMock);

            expect(wrapper.state('selectedSuggestionIndex')).toBe(2);
        });

        test('does not update state when condition does not apply', () => {
            const stateMock = { selectedSuggestionIndex: 1, suggestions: ['a', 'b'] };
            const wrapper = renderShallowComponent().setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            expect(wrapper.state('selectedSuggestionIndex')).toBe(1);

            instance.onKeyDown(eventMock);

            expect(wrapper.state('selectedSuggestionIndex')).toBe(1);
        });
    });

    describe('up arrow', () => {
        const KEY_CODE = 30;

        test('updates state when condition applies', () => {
            const stateMock = { selectedSuggestionIndex: 1, suggestions: ['a', 'b'] };
            const wrapper = renderShallowComponent().setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            expect(wrapper.state('selectedSuggestionIndex')).toBe(1);

            instance.onKeyDown(eventMock);

            expect(wrapper.state('selectedSuggestionIndex')).toBe(0);
        });

        test('does not update state when condition does not apply', () => {
            const stateMock = { selectedSuggestionIndex: -1, suggestions: ['a', 'b'] };
            const wrapper = renderShallowComponent().setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            expect(wrapper.state('selectedSuggestionIndex')).toBe(-1);

            instance.onKeyDown(eventMock);

            expect(wrapper.state('selectedSuggestionIndex')).toBe(-1);
        });
    });

    describe('ESC key', () => {
        const KEY_CODE = 27;

        test('calls onSearchClose', () => {
            const stateMock = { selectedSuggestionIndex: 1, suggestions: ['a', 'b'] };
            const wrapper = renderShallowComponent().setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };
            const onSearchCloseMock = jest.fn();

            instance.onSearchClose = onSearchCloseMock;

            instance.onKeyDown(eventMock);

            expect(onSearchCloseMock).toBeCalledWith();
        });
    });

    describe('ENTER key', () => {
        const KEY_CODE = 13;

        test('calls onSearchSuggestionChosen when selectedSuggestionIndex is not equal to -1', () => {
            const suggestionsMock = ['a', 'b'];
            const suggestionIdMock = 'h41l-s4t4n';
            const stateMock = {
                selectedSuggestionIndex: 1,
                suggestions: suggestionsMock,
                suggestionId: suggestionIdMock,
            };
            const onSearchSuggestionChosenMock = jest.fn();
            const onSearchCloseMock = jest.fn();
            const blurMock = jest.fn();
            const wrapper = renderShallowComponent({
                onSearchSuggestionChosen: onSearchSuggestionChosenMock,
            }).setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            instance.onSearchClose = onSearchCloseMock;
            instance.input = { current: { blur: blurMock } };

            instance.onKeyDown(eventMock);

            expect(onSearchSuggestionChosenMock).toBeCalledWith(suggestionsMock[1], suggestionsMock, suggestionIdMock);
            expect(blurMock).toBeCalledWith();
            expect(onSearchCloseMock).toBeCalledWith();
        });

        test('calls onRedirectToSearchResults when selectedSuggestionIndex equals -1', () => {
            const queryMock = 'hai!';
            const stateMock = { selectedSuggestionIndex: -1, query: queryMock };
            const onRedirectToSearchResultsMock = jest.fn();
            const wrapper = renderShallowComponent({
                onRedirectToSearchResults: onRedirectToSearchResultsMock,
            }).setState(stateMock);
            const instance = wrapper.instance();
            const eventMock = { stopPropagation: () => null, keyCode: KEY_CODE };

            instance.onKeyDown(eventMock);

            expect(onRedirectToSearchResultsMock).toBeCalledWith(queryMock);
        });
    });
});

describe('onSearchSuggestionClick', () => {
    test('calls required methods', () => {
        const suggestionsMock = ['a', 'b'];
        const suggestionIdMock = 'h41l-s4t4n';
        const stateMock = { suggestions: suggestionsMock, suggestionId: suggestionIdMock };
        const onSearchSuggestionChosenMock = jest.fn();
        const onSearchCloseMock = jest.fn();
        const trackMock = jest.fn();
        const wrapper = renderShallowComponent({
            onSearchSuggestionChosen: onSearchSuggestionChosenMock,
            track: trackMock,
        }).setState(stateMock);
        const instance = wrapper.instance();
        const event = {
            preventDefault: () => {},
        };

        instance.onSearchClose = onSearchCloseMock;

        instance.onSearchSuggestionClick(1, event);

        expect(onSearchSuggestionChosenMock).toBeCalledWith(suggestionsMock[1], suggestionsMock, suggestionIdMock);
        expect(onSearchCloseMock).toBeCalledWith();
        expect(trackMock).toBeCalledWith(expect.any(Object));
    });
});

describe('onSearchActivation', () => {
    test('does not update state when search is expanded', () => {
        const onSearchActivationMock = jest.fn();
        const focusMock = jest.fn();
        const wrapper = renderShallowComponent({
            onSearchActivation: onSearchActivationMock,
            isSearchExpanded: true,
        });
        const instance = wrapper.instance();

        instance.input = { current: { focus: focusMock } };

        expect(wrapper.state('inputFocused')).toBe(false);

        instance.onSearchActivation();

        expect(wrapper.state('inputFocused')).toBe(false);

        expect(onSearchActivationMock).not.toBeCalled();
        expect(focusMock).not.toBeCalledWith();
    });

    test('updates state when search is not expanded', () => {
        const onSearchActivationMock = jest.fn();
        const focusMock = jest.fn();
        const wrapper = renderShallowComponent({
            onSearchActivation: onSearchActivationMock,
        });
        const instance = wrapper.instance();

        instance.input = { current: { focus: focusMock } };

        expect(wrapper.state('inputFocused')).toBe(false);

        instance.onSearchActivation();

        expect(wrapper.state('inputFocused')).toBe(true);

        expect(onSearchActivationMock).toBeCalledWith();
        expect(focusMock).toBeCalledWith();
    });
});

describe('onSearchClear', () => {
    test('updates state and focuses input', () => {
        const focusMock = jest.fn();
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        instance.input = { current: { focus: focusMock } };

        instance.onSearchClear();

        expect(wrapper.state('inputFocused')).toBe(true);
        expect(wrapper.state('searchRequestInProgress')).toBe(false);
        expect(wrapper.state('suggestions')).toEqual([]);
        expect(wrapper.state('selectedSuggestionIndex')).toBe(-1);
        expect(wrapper.state('query')).toBe('');

        expect(focusMock).toBeCalledWith();
    });
});

describe('onSearchClose', () => {
    test('updates state and calls method', () => {
        const onSearchCloseMock = jest.fn();
        const wrapper = renderShallowComponent({ onSearchClose: onSearchCloseMock });
        const instance = wrapper.instance();

        instance.onSearchClose();

        expect(wrapper.state('inputFocused')).toBe(false);
        expect(wrapper.state('searchRequestInProgress')).toBe(false);
        expect(wrapper.state('suggestions')).toEqual([]);
        expect(wrapper.state('selectedSuggestionIndex')).toBe(-1);
        expect(wrapper.state('query')).toBe('');

        expect(onSearchCloseMock).toBeCalledWith();
    });
});

describe('onSearchSubmit', () => {
    test('updates state and calls methods', () => {
        const queryMock = 'hai!';
        const onRedirectToSearchResultsMock = jest.fn();
        const onSearchCloseMock = jest.fn();
        const trackMock = jest.fn();
        const wrapper = renderShallowComponent({
            onRedirectToSearchResults: onRedirectToSearchResultsMock,
            track: trackMock,
        }).setState({ query: queryMock });
        const instance = wrapper.instance();

        instance.onSearchClose = onSearchCloseMock;

        instance.onSearchSubmit();

        expect(wrapper.state('searchRequestInProgress')).toBe(true);

        expect(onSearchCloseMock).toBeCalledWith();
        expect(onRedirectToSearchResultsMock).toBeCalledWith(queryMock);
        expect(trackMock).toBeCalledWith(expect.any(Object));
    });
});

describe('onQueryChanged', () => {
    test('calls getSuggestions', () => {
        const eventMock = { target: { value: 'someValue' } };
        const getSuggestionsMock = jest.fn();
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        instance.getSuggestions = getSuggestionsMock;

        instance.onQueryChanged(eventMock);

        expect(getSuggestionsMock).toBeCalledWith(eventMock.target.value);
    });
});

describe('onSuggestionHover', () => {
    test('calls getSuggestions', () => {
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        instance.onSuggestionHover(1);

        expect(wrapper.state('selectedSuggestionIndex')).toBe(1);
    });
});

describe('onRequestEnd', () => {
    test('does not update state when component is unmounted', () => {
        const stateMock = { requestsInProgress: { blah: true, duh: false }, query: 'blah' };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.isMounted = false;

        instance.onRequestEnd();

        expect(wrapper.state('requestsInProgress')).toEqual({ blah: true, duh: false });
    });

    test('updates state when component is still mounted', () => {
        const stateMock = { requestsInProgress: { blah: true, duh: false }, query: 'blah' };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.onRequestEnd();

        expect(wrapper.state('requestsInProgress')).toEqual({ blah: false, duh: false });
    });
});

describe('getSuggestions', () => {
    test('does not update state when component is unmounted', () => {
        const queryMock = 'dd';
        const stateMock = { query: queryMock };
        const hasCachedResultMock = jest.fn();
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.hasCachedResult = hasCachedResultMock;
        instance.isMounted = false;

        instance.getSuggestions('some other query');

        expect(wrapper.state('query')).toBe(queryMock);
        expect(hasCachedResultMock).not.toBeCalled();
    });

    test('updates state when component is still mounted but does not call methods when query is too short', () => {
        const hasCachedResultMock = jest.fn();
        const setSuggestionsMock = jest.fn();
        const requestSuggestionsFromAPIMock = jest.fn();
        const queryMock = 'dd';
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        instance.hasCachedResult = hasCachedResultMock;
        instance.setSuggestions = setSuggestionsMock;
        instance.requestSuggestionsFromAPI = requestSuggestionsFromAPIMock;

        instance.getSuggestions(queryMock);

        expect(wrapper.state('query')).toBe(queryMock);
        expect(wrapper.state('searchRequestInProgress')).toBe(false);
        expect(wrapper.state('selectedSuggestionIndex')).toBe(-1);
        expect(wrapper.state('suggestions')).toEqual([]);
        expect(hasCachedResultMock).not.toBeCalled();
        expect(setSuggestionsMock).not.toBeCalled();
        expect(requestSuggestionsFromAPIMock).not.toBeCalled();
    });

    test('calls setSuggestions when hasCachedResultMock returns true', () => {
        const hasCachedResultMock = jest.fn(() => true);
        const setSuggestionsMock = jest.fn();
        const requestSuggestionsFromAPIMock = jest.fn();
        const cachedSuggestionsMock = ['a', 'b'];
        const queryMock = 'blah';
        const stateMock = { cachedResults: { [queryMock]: cachedSuggestionsMock } };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.hasCachedResult = hasCachedResultMock;
        instance.setSuggestions = setSuggestionsMock;
        instance.requestSuggestionsFromAPI = requestSuggestionsFromAPIMock;

        instance.getSuggestions(queryMock);

        expect(hasCachedResultMock).toBeCalledWith(queryMock);
        expect(setSuggestionsMock).toBeCalledWith(cachedSuggestionsMock);
        expect(requestSuggestionsFromAPIMock).not.toBeCalled();
    });

    test('calls requestSuggestionsFromAPI when hasCachedResultMock returns false', () => {
        const hasCachedResultMock = jest.fn(() => false);
        const setSuggestionsMock = jest.fn();
        const requestSuggestionsFromAPIMock = jest.fn();
        const queryMock = 'blah';
        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        instance.hasCachedResult = hasCachedResultMock;
        instance.setSuggestions = setSuggestionsMock;
        instance.requestSuggestionsFromAPI = requestSuggestionsFromAPIMock;

        instance.getSuggestions(queryMock);

        expect(hasCachedResultMock).toBeCalledWith(queryMock);
        expect(setSuggestionsMock).not.toBeCalled();
        expect(requestSuggestionsFromAPIMock).toBeCalledWith();
    });
});

describe('setSuggestions', () => {
    test('does not update state when component is unmounted', () => {
        const suggestionsMock = ['a', 'b'];
        const suggestionIdMock = 'imma-very-unique'; // see to of file
        const onSearchSuggestionsImpressionMock = jest.fn();
        const wrapper = renderShallowComponent({
            onSearchSuggestionsImpression: onSearchSuggestionsImpressionMock,
        });
        const instance = wrapper.instance();

        instance.isMounted = false;

        instance.setSuggestions(suggestionsMock);

        expect(wrapper.state('suggestions')).not.toBe(suggestionsMock);
        expect(wrapper.state('suggestionId')).not.toBe(suggestionIdMock);
        expect(onSearchSuggestionsImpressionMock).not.toBeCalled();
    });

    test('updates state when component is still mounted', () => {
        const suggestionsMock = ['a', 'b'];
        const suggestionIdMock = 'imma-very-unique'; // see to of file
        const onSearchSuggestionsImpressionMock = jest.fn();
        const wrapper = renderShallowComponent({
            onSearchSuggestionsImpression: onSearchSuggestionsImpressionMock,
        });
        const instance = wrapper.instance();

        instance.setSuggestions(suggestionsMock);

        expect(wrapper.state('suggestions')).toBe(suggestionsMock);
        expect(wrapper.state('suggestionId')).toBe(suggestionIdMock);
        expect(onSearchSuggestionsImpressionMock).toBeCalledWith(suggestionsMock, suggestionIdMock);
    });
});

describe('requestSuggestionsFromAPI', () => {
    test('does not fetch when request is in progress', async () => {
        expect.assertions(1);

        const queryMock = 'hai!';
        const stateMock = { requestsInProgress: { [queryMock]: true }, query: queryMock };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        global.fetch = jest.fn();

        instance.requestSuggestionsFromAPI();

        expect(global.fetch).not.toBeCalled();
    });

    test('does not fetch when component is unmounted', async () => {
        expect.assertions(1);

        const wrapper = renderShallowComponent();
        const instance = wrapper.instance();

        global.fetch = jest.fn();
        instance.isMounted = false;

        instance.requestSuggestionsFromAPI();

        expect(global.fetch).not.toBeCalled();
    });

    describe('when fetch returns invalid status eg. 500', () => {
        test('does not call setSuggestions or cacheResult', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const responseMock = { ok: false, status: 500 };
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: false, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockResolvedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).not.toBeCalled();
            expect(cacheResultMock).not.toBeCalled();
            expect(onRequestEndMock).toBeCalledWith();
        });
    });

    describe('when fetch returns 404 status', () => {
        test('calls setSuggestions and cacheResult', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const responseMock = { ok: false, status: 404 };
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: false, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockResolvedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).toBeCalledWith([]);
            expect(cacheResultMock).toBeCalledWith(queryMock, []);
            expect(onRequestEndMock).toBeCalledWith();
        });
    });

    describe('when fetch throws', () => {
        test('does not call setSuggestions or cacheResult', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const responseMock = 'some error';
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: false, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockRejectedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).not.toBeCalled();
            expect(cacheResultMock).not.toBeCalled();
            expect(onRequestEndMock).toBeCalledWith();
        });
    });

    describe('when fetch returns valid status', () => {
        test('does not call setSuggestions or cacheResult when response is falsy', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const responseMock = { ok: true, status: 200, json: () => null };
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: false, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockResolvedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).not.toBeCalled();
            expect(cacheResultMock).not.toBeCalled();
            expect(onRequestEndMock).toBeCalledWith();
        });

        test('does not call setSuggestions or cacheResult when searchRequestInProgress is set', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const responseMock = { ok: true, status: 200, json: () => null };
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: true, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockResolvedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).not.toBeCalled();
            expect(cacheResultMock).not.toBeCalled();
            expect(onRequestEndMock).toBeCalledWith();
        });

        test('calls setSuggestions and cacheResult when response is valid', async () => {
            expect.assertions(5);

            const urlMock = 'some://valid.url';
            const queryMock = 'blah';
            const modelMock = { suggestions: { url: urlMock } };
            const suggestionsMock = ['a', 'b'];
            const responseMock = { ok: true, status: 200, json: () => ({ suggestions: suggestionsMock }) };
            const setSuggestionsMock = jest.fn();
            const cacheResultMock = jest.fn();
            const onRequestEndMock = jest.fn();
            const stateMock = { searchRequestInProgress: false, query: queryMock };
            const wrapper = renderShallowComponent({ model: modelMock }).setState(stateMock);
            const instance = wrapper.instance();

            global.fetch = jest.fn().mockResolvedValue(responseMock);
            instance.setSuggestions = setSuggestionsMock;
            instance.cacheResult = cacheResultMock;
            instance.onRequestEnd = onRequestEndMock;

            await instance.requestSuggestionsFromAPI();

            expect(wrapper.state('requestsInProgress')).toEqual({ [queryMock]: true });
            expect(global.fetch).toBeCalledWith(`${urlMock}&query=${queryMock}`);
            expect(setSuggestionsMock).toBeCalledWith(suggestionsMock);
            expect(cacheResultMock).toBeCalledWith(queryMock, suggestionsMock);
            expect(onRequestEndMock).toBeCalledWith();
        });
    });
});

describe('cacheResult', () => {
    test('updates state with cached items', () => {
        const stateMock = { cachedResults: { blah: ['a', 'b'] } };
        const suggestionsMock = ['e', 'f'];
        const queryMock = 'kaboom';
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.cacheResult(queryMock, suggestionsMock);

        expect(wrapper.state('cachedResults')).toEqual({
            ...stateMock.cachedResults,
            [queryMock]: suggestionsMock,
        });
    });

    test('updates state with default value when necessary', () => {
        const stateMock = { cachedResults: { blah: ['a', 'b'] } };
        const queryMock = 'kaboom';
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.cacheResult(queryMock);

        expect(wrapper.state('cachedResults')).toEqual({ ...stateMock.cachedResults, [queryMock]: [] });
    });
});

describe('hasCachedResult', () => {
    test('returns true when some results are in cache', () => {
        const queryMock = 'blah';
        const stateMock = { cachedResults: { [queryMock]: ['a', 'b'] } };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.hasCachedResult(queryMock);

        expect(instance.hasCachedResult(queryMock)).toBe(true);
    });

    test('returns false when some results are not in cache', () => {
        const queryMock = 'duh';
        const stateMock = { cachedResults: { blah: ['a', 'b'] } };
        const wrapper = renderShallowComponent().setState(stateMock);
        const instance = wrapper.instance();

        instance.hasCachedResult(queryMock);

        expect(instance.hasCachedResult(queryMock)).toBe(false);
    });
});

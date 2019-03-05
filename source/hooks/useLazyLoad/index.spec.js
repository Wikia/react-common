import { useEffect, useRef } from 'react';

import useLazyLoad from './index';

// TODO: remove mocks when enzyme/react-test-renderer will fully support hooks
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useRef: jest.fn(() => ({ current: null })),
    useEffect: jest.fn(),
}));

/* eslint-disable-next-line jest/no-hooks */
beforeEach(() => {
    jest.resetModules();
});

test('returns an ref element', () => {
    const refMock = { current: document.createElement('div') };
    const handlerMock = jest.fn();

    useRef.mockImplementation(() => refMock);

    useLazyLoad(handlerMock);

    expect(useLazyLoad(handlerMock)).toBe(refMock);
});

test('adds adn removes event to element via useEffect calls', () => {
    const elMock = document.createElement('div');
    const addEventListenerMock = jest.fn();
    const removeEventListenerMock = jest.fn();
    const handlerMock = jest.fn();

    useRef.mockImplementation(() => ({ current: elMock }));
    useEffect.mockImplementation(callback => callback()());
    elMock.addEventListener = addEventListenerMock;
    elMock.removeEventListener = removeEventListenerMock;

    useLazyLoad(handlerMock);

    expect(addEventListenerMock).toBeCalledWith('scroll', expect.any(Function));
    expect(removeEventListenerMock).toBeCalledWith('scroll', expect.any(Function));
});

test('calls handler on scroll when condition applies', () => {
    const elMock = document.createElement('div');
    const handlerMock = jest.fn();

    useRef.mockImplementation(() => ({ current: elMock }));
    useEffect.mockImplementation(callback => callback());

    useLazyLoad(handlerMock);

    elMock.dispatchEvent(new Event('scroll'));

    expect(handlerMock).toBeCalledWith();
});

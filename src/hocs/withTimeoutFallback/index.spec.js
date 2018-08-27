import {mount} from 'enzyme/build/index';
import React from 'react';
import sinon from 'sinon';
import withTimeoutFallback from './index';

const FakeSpinner = () => (<div> ...spinner </div>);
const FallbackComponent = () => (<div> Alt Fallback </div>);


test('Default Spinner with timeout', () => {
  const clock = sinon.useFakeTimers();
  const SpinnerWithTimeout = withTimeoutFallback(FakeSpinner);

  const component = mount(
    <SpinnerWithTimeout />,
  );
  expect(component).toMatchSnapshot();
  clock.tick(10000);
  clock.tick(100);
  component.update();
  expect(component).toMatchSnapshot();
});

test('Default spinner with shorter timeout', () => {
  const clock = sinon.useFakeTimers();
  const SpinnerWithTimeout = withTimeoutFallback(FakeSpinner, {timeout: 100});

  const component = mount(
    <SpinnerWithTimeout />,
  );

  expect(component).toMatchSnapshot();
  clock.tick(100);
  clock.tick(100);
  component.update();
  expect(component).toMatchSnapshot();
});

test('Timer unmounts', () => {
  const clock = sinon.useFakeTimers();
  const SpinnerWithTimeout = withTimeoutFallback(FakeSpinner, {timeout: 100});

  const component = mount(
    <SpinnerWithTimeout />,
  );
  expect(component).toMatchSnapshot();
  clock.tick(100);
  clock.tick(100);
  component.update();
  expect(component).toMatchSnapshot();
  component.unmount();
});

test('Alternate fallback component', () => {
  const clock = sinon.useFakeTimers();
  const SpinnerWithTimeout = withTimeoutFallback(FakeSpinner, {timeout: 100, FallbackComponent});

  const component = mount(
    <SpinnerWithTimeout />,
  );

  expect(component).toMatchSnapshot();
  clock.tick(100);
  clock.tick(100);
  component.update();
  expect(component).toMatchSnapshot();

  // allow unmouunt of hoc
  clock.tick(100);
  clock.tick(100);
});

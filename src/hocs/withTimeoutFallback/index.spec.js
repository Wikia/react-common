
import React from 'react';
import renderer from 'react-test-renderer';

import withTimeoutFallback from './index';

const FakeSpinner = props => (<div> ...spinner </div>);

test('Spinner loads with regular content until timeout expires', () => {
  const SpinnerWithTimeout = withTimeoutFallback(FakeSpinner);

  const component = renderer.create(
    <SpinnerWithTimeout />,
  );

  // need to figure out how to test
});

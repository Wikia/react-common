import React from 'react';
import renderer from 'react-test-renderer';

// eslint-disable-next-line no-restricted-imports
import Button from '../Button';

import ButtonGroup from './index';

test('ButtonGroup renders correctly', () => {
    const component = renderer.create(
        <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
        </ButtonGroup>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

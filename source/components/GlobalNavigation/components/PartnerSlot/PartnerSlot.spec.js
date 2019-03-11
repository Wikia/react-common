import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import PartnerSlot from './PartnerSlot';

const defaultProps = {
    model: {
        title: { type: 'text', value: 'Xkxd Wiki' },
        'image-data': { url: 'some://valid.url' },
        href: '//xkxd.fandom.com',
        'tracking-label': 'track-partner',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<PartnerSlot {...computedProps} />);
}

test('PartnerSlot renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

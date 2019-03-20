import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import LinkButton from './LinkButton';

jest.mock('react-i18next', () => ({
    useTranslation: () => [value => value],
}));

const defaultProps = {
    link: {
        type: 'link-button',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-create-wiki-link-start-wikia',
        },
        href: '//www.wikia.com/Special:CreateNewWiki',
        'tracking-label': 'link.start-a-wiki',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<LinkButton {...computedProps} />);
}

test('LinkButton renders correctly', () => {
    expect(renderComponent()).toMatchSnapshot();
});

import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { DESIGN_SYSTEM_I18N_NAMESPACE } from '../../../../consts';

import List from '../../../List';
import Dropdown from '../../../Dropdown';

import LinkButton from './LinkButton';
import LinkText from './LinkText';

/* eslint-disable react/no-array-index-key */
const LinkGroup = ({ link }) => {
    const [t] = useTranslation(DESIGN_SYSTEM_I18N_NAMESPACE);

    return (
        <Dropdown
            toggle={t(link.title.key)}
            className="wds-global-navigation__link-group"
            toggleClassName="wds-global-navigation__link"
            contentClassName="wds-global-navigation__dropdown-content"
            iconName="dropdown-tiny"
            hasShadow
        >
            <List isLinked>
                {link.items.map((item, index) => {
                    let linkEl;

                    if (item.type === 'link-text') {
                        linkEl = <LinkText link={item} />;
                    } else {
                        linkEl = <LinkButton link={item} />;
                    }

                    return (
                        <li key={index}>
                            {linkEl}
                        </li>
                    );
                })}
            </List>
        </Dropdown>
    );
};

LinkGroup.propTypes = {
    link: PropTypes.shape().isRequired,
};

export default LinkGroup;

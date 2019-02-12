import React from 'react';
import { useTranslation } from 'react-i18next';

import List from '../../../List';
import GlobalNavigationLinkText from './GlobalNavigationLinkText';
import GlobalNavigationLinkButton from './GlobalNavigationLinkButton';
import Dropdown from '../../../Dropdown';

const GlobalNavigationLinkGroup = ({ link }) => {
    const [t] = useTranslation();

    return (
        <Dropdown
            toggle={t(link.title.key)}
            className="wds-global-navigation__link-group"
            hasShadow
            toggleClassName="wds-global-navigation__link"
            contentClassName="wds-global-navigation__dropdown-content"
        >
            <List isLinked>
                {link.items.map((item, index) => {
                    let link;
                    if (item.type === 'link-text') {
                        link = <GlobalNavigationLinkText link={item} key={index}/>;
                    } else {
                        link = (
                            <GlobalNavigationLinkButton link={item} key={index}/>
                        );
                    }
                    return (
                        <li key={index}>
                            {link}
                        </li>
                    );
                })}
            </List>
        </Dropdown>
    );
};

export default GlobalNavigationLinkGroup;

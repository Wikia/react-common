import React from 'react';
import LogoFandomWhite from '../../assets/LogoFandomWhite';

import GlobalNavigationSearch from './components/GlobalNavigationSearch';
import GlobalNavigationUserAnon from './components/GlobalNavigationUser/GlobalNavigationUserAnon';

import './styles.scss';
import GlobalNavigationLinkText from './components/GlobalNavigationLink/GlobalNavigationLinkText';
import GlobalNavigationLinkGroup from './components/GlobalNavigationLink/GlobalNavigationLinkGroup';
import GlobalNavigationLinkButton from './components/GlobalNavigationLink/GlobalNavigationLinkButton';

class GlobalNavigation extends React.Component {

    renderMainNavigation(navigation) {
        return navigation.map(link => {
            if (link.type === 'link-text') {
                return <GlobalNavigationLinkText link={link} isStandaloneLink />;
            } else if (link.type === 'link-group') {
                return <GlobalNavigationLinkGroup link={link} />
            }
        });
    }

    render() {
        const { model } = this.props;

        return (
            <div className="wds-global-navigation">
                <div className="wds-global-navigation__content-bar-left">
                    <a
                        href={model.logo.href}
                        className="wds-global-navigation__logo"
                        data-tracking-label={model.logo['tracking-label']}
                    >
                        <LogoFandomWhite height="27" />
                    </a>
                    <nav className="wds-global-navigation__links">
                        {this.renderMainNavigation(model['main-navigation'])}
                    </nav>
                </div>
                <div className="wds-global-navigation__content-bar-right">
                    <div className="wds-global-navigation__dropdown-controls">
                        <GlobalNavigationSearch />
                        <GlobalNavigationUserAnon />
                        <div className="wds-global-navigation__start-a-wiki">
                            <GlobalNavigationLinkButton link={model['create-wiki']} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GlobalNavigation;

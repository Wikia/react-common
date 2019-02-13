import React from 'react';
import LogoFandomWhite from '../../assets/LogoFandomWhite';

import GlobalNavigationSearch from './components/GlobalNavigationSearch';

import './styles.scss';
import GlobalNavigationLinkText from './components/GlobalNavigationLink/GlobalNavigationLinkText';
import GlobalNavigationLinkGroup from './components/GlobalNavigationLink/GlobalNavigationLinkGroup';
import GlobalNavigationLinkButton from './components/GlobalNavigationLink/GlobalNavigationLinkButton';
import GlobalNavigationUser from './components/GlobalNavigationUser/GlobalNavigationUser';
import GlobalNavigationSearchModal from "./components/GlobalNavigationSearch/GlobalNavigationSearchModal";
import GlobalNavigationMobileUser from "./components/GlobalNavigationUser/GlobalNavigationMobileUser";

class GlobalNavigation extends React.Component {

    renderMainNavigation(navigation) {
        return navigation.map((link, index) => {
            if (link.type === 'link-text') {
                return <GlobalNavigationLinkText key={index} link={link} isStandaloneLink />;
            } else if (link.type === 'link-group') {
                return <GlobalNavigationLinkGroup key={index} link={link} />
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
                        <GlobalNavigationSearch data={model.search} />
                        <GlobalNavigationUser data={model} />
                        <div className="wds-global-navigation__start-a-wiki">
                            <GlobalNavigationLinkButton link={model['create-wiki']} />
                        </div>
                    </div>
                    <div className="wds-global-navigation__modal-controls">
                        <GlobalNavigationSearchModal/>
                        <GlobalNavigationMobileUser/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GlobalNavigation;

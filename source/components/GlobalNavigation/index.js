import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import LogoFandomWhite from '../../assets/LogoFandomWhite';

import GlobalNavigationSearch from './components/GlobalNavigationSearch';

import GlobalNavigationLinkText from './components/GlobalNavigationLink/GlobalNavigationLinkText';
import GlobalNavigationLinkGroup from './components/GlobalNavigationLink/GlobalNavigationLinkGroup';
import GlobalNavigationLinkButton from './components/GlobalNavigationLink/GlobalNavigationLinkButton';
import GlobalNavigationUser from './components/GlobalNavigationUser/GlobalNavigationUser';
import GlobalNavigationSearchModal from './components/GlobalNavigationSearch/GlobalNavigationSearchModal';
import GlobalNavigationMobileUserModal from './components/GlobalNavigationUser/GlobalNavigationMobileUserModal';

import './styles.scss';
import Icon from "../Icon/index";
import Button from "../Button/index";

class GlobalNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        isSearchModalOpen: false,
    };

    openModal(type) {
        if (type === 'search') {
            this.setState({ isSearchModalOpen: true });
        }
    }

    closeModal() {
        this.setState({
            isSearchModalOpen: false,
            isUserModalOpen: false,
        })
    }

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
        const {
            model,
            onSearchToggleClicked,
            onSearchSuggestionChosen,
            goToSearchResults,
            track,
            onSearchCloseClicked,
        } = this.props;
        const { isSearchModalOpen } = this.state;
        const containerClass = classNames('wds-global-navigation', {
            'wds-search-is-active': isSearchModalOpen,
            'wds-is-modal-opened': isSearchModalOpen,
        });

        return (
            <div className={containerClass}>
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
                        <GlobalNavigationSearch
                            model={model.search}
                            onSearchToggleClicked={onSearchToggleClicked}
                            onSearchSuggestionChosen={onSearchSuggestionChosen}
                            onSearchCloseClicked={onSearchCloseClicked}
                            goToSearchResults={goToSearchResults}
                            track={track}
                        />
                        <GlobalNavigationUser data={model} />
                        <div className="wds-global-navigation__start-a-wiki">
                            <GlobalNavigationLinkButton link={model['create-wiki']} />
                        </div>
                    </div>
                    <div className="wds-global-navigation__modal-controls">
                        <GlobalNavigationSearchModal
                            model={model}
                            isOpen={isSearchModalOpen}
                            openModal={this.openModal}
                        >
                            <GlobalNavigationSearch
                                model={model.search}
                                onSearchToggleClicked={onSearchToggleClicked}
                                onSearchCloseClicked={onSearchCloseClicked}
                                onSearchSuggestionChosen={onSearchSuggestionChosen}
                                goToSearchResults={goToSearchResults}
                                track={track}
                                inSearchModal
                            />
                            {this.renderMainNavigation(model['main-navigation'])}
                        </GlobalNavigationSearchModal>
                        <GlobalNavigationMobileUserModal data={model}/>
                        <Button onClick={this.closeModal} text className="wds-global-navigation__modal-control wds-global-navigation__modal-control-close">
                            <Icon name="close" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

GlobalNavigation.propTypes = {
    model: PropTypes.object.isRequired,
    onSearchCloseClicked: PropTypes.func,
    onSearchToggleClicked: PropTypes.func,
    onSearchSuggestionChosen: PropTypes.func,
    goToSearchResults: PropTypes.func,
    track: PropTypes.func,
};

GlobalNavigation.defaultProps = {
    onSearchCloseClicked: () => {},
    onSearchToggleClicked: () => {},
    onSearchSuggestionChosen: () => {},
    goToSearchResults: () => {},
    track: () => {},
};

export default GlobalNavigation;

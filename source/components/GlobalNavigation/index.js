import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/index';
import Button from '../Button/index';

import LogoFandomWhite from '../../assets/LogoFandomWhite';

import Search from './components/Search/Search';
import LinkText from './components/Link/LinkText';
import LinkGroup from './components/Link/LinkGroup';
import LinkButton from './components/Link/LinkButton';
import User from './components/User/User';
import SearchModal from './components/Search/SearchModal';
import MobileUser from './components/User/MobileUser';
import NotificationsDataProvider from './components/Notifications/NotificationsDataProvider';
import NotificationsDropdown from './components/Notifications/NotificationsDropdown';
import PartnerSlot from './components/PartnerSlot/PartnerSlot';

import './styles.scss';

/* eslint-disable react/no-array-index-key */
class GlobalNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeAndDeactivate = this.closeAndDeactivate.bind(this);
        this.onSearchActivation = this.onSearchActivation.bind(this);
        this.onSearchClose = this.onSearchClose.bind(this);
        this.onSearchSuggestionChosen = this.onSearchSuggestionChosen.bind(this);
        this.onSearchSuggestionsImpression = this.onSearchSuggestionsImpression.bind(this);
        this.onRedirectToSearchResults = this.onRedirectToSearchResults.bind(this);
        this.onTrackingLabelClick = this.onTrackingLabelClick.bind(this);
    }

    state = {
        isSearchModalOpen: false,
        isUserModalOpen: false,
        isSearchExpanded: false,
    };

    onRedirectToSearchResults() {
        const { goToSearchResults } = this.props;

        this.closeAndDeactivate();

        goToSearchResults();
    }

    onSearchActivation() {
        const { onSearchToggleClicked } = this.props;

        this.setState({ isSearchExpanded: true });

        onSearchToggleClicked();
    }

    onSearchClose() {
        const { onSearchCloseClicked } = this.props;

        this.closeAndDeactivate();

        onSearchCloseClicked();
    }

    onSearchSuggestionChosen(clickedSuggestion, displayedSuggestions, suggestionId) {
        const { onSearchSuggestionChosen } = this.props;

        this.closeAndDeactivate();

        onSearchSuggestionChosen(clickedSuggestion, displayedSuggestions, suggestionId);
    }

    onSearchSuggestionsImpression(suggestions, suggestionId) {
        const { onSearchSuggestionsImpression } = this.props;

        onSearchSuggestionsImpression(suggestions, suggestionId);
    }

    onTrackingLabelClick(event) {
        const { track } = this.props;
        const elementToTrack = event.target.closest('[data-tracking-label]');

        if (elementToTrack) {
            track({
                action: 'click',
                category: 'navigation',
                label: elementToTrack.getAttribute('data-tracking-label'),
            });
        }
    }

    closeAndDeactivate() {
        this.setState({
            isSearchModalOpen: false,
            isUserModalOpen: false,
            isSearchExpanded: false,
        });
    }

    openModal(type) {
        if (type === 'search') {
            this.setState({ isSearchModalOpen: true });
        }

        if (type === 'user') {
            this.setState({ isUserModalOpen: true });
        }
    }

    renderMainNavigation(navigation) {
        return navigation.map((link, index) => {
            if (link.type === 'link-text') {
                return <LinkText key={index} link={link} isStandaloneLink />;
            }

            if (link.type === 'link-group') {
                return <LinkGroup key={index} link={link} />;
            }

            return null;
        });
    }

    render() {
        const { model, track } = this.props;
        const partnerSlotModel = model['partner-slot'];
        const { isSearchModalOpen, isUserModalOpen, isSearchExpanded } = this.state;
        const containerClass = classNames('wds-global-navigation', {
            'wds-search-is-active': isSearchExpanded || isSearchModalOpen,
            'wds-is-modal-opened': isSearchModalOpen || isUserModalOpen,
            'wds-has-partner-slot': partnerSlotModel,
        });

        return (
            <NotificationsDataProvider serviceUrl={model['services-domain']}>
                <div className={containerClass} onClick={this.onTrackingLabelClick}>
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
                            <Search
                                model={model.search}
                                isSearchExpanded={isSearchExpanded}
                                onSearchActivation={this.onSearchActivation}
                                onSearchClose={this.onSearchClose}
                                onSearchSuggestionChosen={this.onSearchSuggestionChosen}
                                onSearchSuggestionsImpression={this.onSearchSuggestionsImpression}
                                onRedirectToSearchResults={this.onRedirectToSearchResults}
                                track={track}
                            />
                            <User data={model} />
                            {
                                model.user && <NotificationsDropdown track={track} />
                            }
                            <div className="wds-global-navigation__start-a-wiki">
                                <LinkButton link={model['create-wiki']} />
                            </div>
                        </div>
                        <div className="wds-global-navigation__modal-controls">
                            <SearchModal
                                model={model}
                                isOpen={isSearchModalOpen}
                                openModal={this.openModal}
                            >
                                <Search
                                    model={model.search}
                                    isSearchExpanded={isSearchExpanded}
                                    onSearchActivation={this.onSearchActivation}
                                    onSearchClose={this.onSearchClose}
                                    onSearchSuggestionChosen={this.onSearchSuggestionChosen}
                                    onSearchSuggestionsImpression={this.onSearchSuggestionsImpression}
                                    onRedirectToSearchResults={this.onRedirectToSearchResults}
                                    track={track}
                                    inSearchModal
                                />
                                <nav className="wds-global-navigation__links">
                                    {this.renderMainNavigation(model['main-navigation'])}
                                </nav>
                            </SearchModal>
                            <MobileUser
                                data={model}
                                openModal={this.openModal}
                                isOpen={isUserModalOpen}
                                track={track}
                            />
                            <Button
                                onClick={this.closeAndDeactivate}
                                className="wds-global-navigation__modal-control wds-global-navigation__modal-control-close"
                                text
                            >
                                <Icon name="close" />
                            </Button>
                        </div>
                    </div>
                    {
                        partnerSlotModel && <PartnerSlot model={partnerSlotModel} />
                    }
                </div>
            </NotificationsDataProvider>
        );
    }
}

GlobalNavigation.propTypes = {
    goToSearchResults: PropTypes.func,
    model: PropTypes.object.isRequired,
    onSearchCloseClicked: PropTypes.func,
    onSearchSuggestionChosen: PropTypes.func,
    onSearchSuggestionsImpression: PropTypes.func,
    onSearchToggleClicked: PropTypes.func,
    track: PropTypes.func,
};

GlobalNavigation.defaultProps = {
    goToSearchResults: () => {},
    onSearchCloseClicked: () => {},
    onSearchSuggestionChosen: () => {},
    onSearchSuggestionsImpression: () => {},
    onSearchToggleClicked: () => {},
    track: () => {},
};

export default GlobalNavigation;

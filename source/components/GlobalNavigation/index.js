import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/index';
import Button from '../Button/index';

import LogoFandomWhite from '../../assets/LogoFandomWhite';

import GlobalNavigationSearch from './components/GlobalNavigationSearch/GlobalNavigationSearch';
import GlobalNavigationLinkText from './components/GlobalNavigationLink/GlobalNavigationLinkText';
import GlobalNavigationLinkGroup from './components/GlobalNavigationLink/GlobalNavigationLinkGroup';
import GlobalNavigationLinkButton from './components/GlobalNavigationLink/GlobalNavigationLinkButton';
import GlobalNavigationUser from './components/GlobalNavigationUser/GlobalNavigationUser';
import GlobalNavigationSearchModal from './components/GlobalNavigationSearch/GlobalNavigationSearchModal';
import GlobalNavigationMobileUser from './components/GlobalNavigationUser/GlobalNavigationMobileUser';
import NotificationsDataProvider from './components/GlobalNavigationNotifications/NotificationsDataProvider';
import NotificationsDropdown from './components/GlobalNavigationNotifications/NotificationsDropdown';

import { NotificationsConsumer } from './utils/NotificationContext';

import './styles.scss';

/* eslint-disable react/no-array-index-key */
class GlobalNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        isSearchModalOpen: false,
        isUserModalOpen: false,
    };

    openModal(type) {
        if (type === 'search') {
            this.setState({ isSearchModalOpen: true });
        }

        if (type === 'user') {
            this.setState({ isUserModalOpen: true });
        }
    }

    closeModal() {
        this.setState({
            isSearchModalOpen: false,
            isUserModalOpen: false,
        });
    }

    renderMainNavigation(navigation) {
        return navigation.map((link, index) => {
            if (link.type === 'link-text') {
                return <GlobalNavigationLinkText key={index} link={link} isStandaloneLink />;
            }

            if (link.type === 'link-group') {
                return <GlobalNavigationLinkGroup key={index} link={link} />;
            }

            return null;
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
        const { isSearchModalOpen, isUserModalOpen } = this.state;
        const containerClass = classNames('wds-global-navigation', {
            'wds-search-is-active': isSearchModalOpen,
            'wds-is-modal-opened': isSearchModalOpen || isUserModalOpen,
        });

        return (
            <NotificationsDataProvider serviceUrl={model['services-domain']}>
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
                            {
                                model.user && (
                                    <NotificationsConsumer>
                                        {
                                            ({ unreadCount, loadFirstPage, markAllAsRead }) => (
                                                <NotificationsDropdown
                                                    track={track}
                                                    loadFirstPage={loadFirstPage}
                                                    unreadCount={unreadCount}
                                                    markAllAsRead={markAllAsRead}
                                                />
                                            )
                                        }
                                    </NotificationsConsumer>
                                )
                            }
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
                                <nav className="wds-global-navigation__links">
                                    {this.renderMainNavigation(model['main-navigation'])}
                                </nav>
                            </GlobalNavigationSearchModal>
                            <GlobalNavigationMobileUser
                                data={model}
                                openModal={this.openModal}
                                isOpen={isUserModalOpen}
                                track={track}
                            />
                            <Button
                                onClick={this.closeModal}
                                className="wds-global-navigation__modal-control wds-global-navigation__modal-control-close"
                                text
                            >
                                <Icon name="close" />
                            </Button>
                        </div>
                    </div>
                </div>
            </NotificationsDataProvider>
        );
    }
}

GlobalNavigation.propTypes = {
    goToSearchResults: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    model: PropTypes.object.isRequired,
    onSearchCloseClicked: PropTypes.func,
    onSearchSuggestionChosen: PropTypes.func,
    onSearchToggleClicked: PropTypes.func,
    track: PropTypes.func,
};

GlobalNavigation.defaultProps = {
    goToSearchResults: () => {},
    onSearchCloseClicked: () => {},
    onSearchSuggestionChosen: () => {},
    onSearchToggleClicked: () => {},
    track: () => {},
};

export default GlobalNavigation;

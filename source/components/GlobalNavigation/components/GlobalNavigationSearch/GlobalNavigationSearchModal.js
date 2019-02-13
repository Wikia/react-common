import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../../Button";
import Icon from "../../../Icon";

class GlobalNavigationSearchModal extends React.Component {

    render() {
        const { openModal, children, isOpen } = this.props;

        return (
            <React.Fragment>
                <Button
                    className="wds-global-navigation__modal-control wds-global-navigation__modal-control-search"
                    onClick={() => openModal('search')}
                    text
                >
                    <Icon name="magnifying-glass"/>
                </Button>
                {
                    isOpen && (
                        <div className="wds-global-navigation__modal wds-search-modal">
                            <div className="wds-search-modal__form-and-links-wrapper">
                                {children}
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}

GlobalNavigationSearchModal.propTypes = {
    children: PropTypes.node.isRequired,
    openModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default GlobalNavigationSearchModal;


/**
 {{global-navigation/search-modal
      model=model.search
      navigationModel=model.main-navigation
      isOpen=isSearchModalOpen
      canShowContentRecommendations=canShowContentRecommendations
      contentRecommendationsUrl=model.content-recommendations.url
      openModal=(action openModal)
      onSearchToggleClicked=(action "onSearchToggleClicked")
      onSearchSuggestionChosen=(action "onSearchSuggestionChosen")
      goToSearchResults=(action "goToSearchResults")
      track=(action "track")
    }}
 */

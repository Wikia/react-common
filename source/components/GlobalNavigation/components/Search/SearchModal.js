import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import Icon from '../../../Icon';

const SearchModal = ({ openModal, children, isOpen }) => (
    <React.Fragment>
        <Button
            className="wds-global-navigation__modal-control wds-global-navigation__modal-control-search"
            onClick={() => openModal('search')}
            text
        >
            <Icon name="magnifying-glass" />
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
);

SearchModal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default SearchModal;

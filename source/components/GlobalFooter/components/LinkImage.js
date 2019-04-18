import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

const LinkImage = ({ model }) => (
    <a href={model.href} className="wds-global-footer__link" data-tracking-label={model.tracking_label}>
        <Svg name={model['image-data'].name} className="wds-global-footer__image wds-icon" />
    </a>
);

LinkImage.propTypes = {
    model: PropTypes.shape().isRequired,
};
export default LinkImage;

import React from 'react';
import PropTypes from 'prop-types';

import { StoreAppstore, StoreGoogleplay } from '../../../assets';
import {
    IconFacebook,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
    IconYoutube,
    IconVkontakte,
} from '../../../icons';

const svgMap = {
    'wds-company-store-appstore': StoreAppstore,
    'wds-company-store-googleplay': StoreGoogleplay,
    'wds-icons-facebook': IconFacebook,
    'wds-icons-twitter': IconTwitter,
    'wds-icons-youtube': IconYoutube,
    'wds-icons-instagram': IconInstagram,
    'wds-icons-linkedin': IconLinkedin,
    'wds-icons-vkontakte': IconVkontakte,
};

const LinkImage = ({ model }) => {
    const Svg = svgMap[model['image-data'].name];

    return (
        <a href={model.href} className="wds-global-footer__link" data-tracking-label={model.tracking_label}>
            <Svg className="wds-global-footer__link-image wds-icon" />
        </a>
    );
};

LinkImage.propTypes = {
    model: PropTypes.shape().isRequired,
};
export default LinkImage;

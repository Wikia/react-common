import React from 'react';

import Svg from './Svg';

const LinkImage = ({ model }) => {
    return <a href={model.href} className="wds-global-footer__link" data-tracking-label={model.tracking_label}>
        <Svg name={model['image-data'].name} className="wds-global-footer__image wds-icon" />
    </a>
};

export default LinkImage;

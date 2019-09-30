import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { StoreLogoFandom, StoreLogoDdb } from '../../../assets';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const svgMap = {
    'wds-company-store-logo-fandom': StoreLogoFandom,
    'wds-company-store-logo-ddb': StoreLogoDdb,
};

const Image = ({ image }) => {
    const Svg = svgMap[image.name];
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    console.log(image);

    return (
        <figure className="wds-global-footer__image">
            <Svg className="wds-icon" />
            {image.caption
                && (
                    <figcaption className="wds-global-footer__image-caption">
                        {t(image.caption.key)}
                    </figcaption>
                )
            }
        </figure>
    );
};

Image.propTypes = {
    image: PropTypes.shape().isRequired,
};
export default Image;

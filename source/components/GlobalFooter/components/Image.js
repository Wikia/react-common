import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { StoreLogoFandom, StoreLogoDdb } from '../../../assets';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const svgMap = {
    'wds-company-store-logo-fandom': StoreLogoFandom,
    'wds-company-store-logo-ddb': StoreLogoDdb,
};

const Image = ({ name, caption }) => {
    const Svg = svgMap[name];
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <figure className="wds-global-footer__image">
            <Svg className="wds-icon" />
            {caption
                && (
                    <figcaption className="wds-global-footer__image-caption">
                        {t(caption.key)}
                    </figcaption>
                )
            }
        </figure>
    );
};

Image.propTypes = {
    caption: PropTypes.shape(),
    name: PropTypes.string.isRequired,
};

Image.defaultProps = {
    caption: null,
};

export default Image;

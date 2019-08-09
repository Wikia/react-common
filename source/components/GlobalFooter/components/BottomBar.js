import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const BottomBar = ({ model }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <div className="wds-global-footer__bottom-bar">
            <div className="wds-global-footer__bottom-bar-row wds-has-padding">
                {t(
                    model.licensing_and_vertical.description.key,
                    {
                        sitename: model.licensing_and_vertical.description.params.sitename.value,
                        vertical: t(model.licensing_and_vertical.description.params.vertical.key),
                    }
                )}
            </div>
        </div>
    );
};

BottomBar.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default BottomBar;

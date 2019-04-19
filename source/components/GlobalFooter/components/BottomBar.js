import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { DESIGN_SYSTEM_I18N_NAMESPACE } from '../../../consts';

const BottomBar = ({ model }) => {
    const [t] = useTranslation(DESIGN_SYSTEM_I18N_NAMESPACE);

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

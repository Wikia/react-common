import React from 'react'
import { withTranslation } from 'react-i18next';

const BottomBar = ({ t, model }) => {
    return <div className="wds-global-footer__bottom-bar">
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
};

export default withTranslation()(BottomBar);

import React from 'react';

import IconAlertSmall from '../../icons/IconAlertSmall';
import IconCheckmarkSmall from '../../icons/IconCheckmarkSmall';
import IconErrorSmall from '../../icons/IconErrorSmall';
import IconFlagSmall from '../../icons/IconFlagSmall';

export function getIcon(type) {
    switch (type) {
        case ('alert'):
            return <IconErrorSmall className="wds-banner-notification__icon-mark" />;
        case ('warning'):
            return <IconAlertSmall className="wds-banner-notification__icon-mark" />;
        case ('success'):
            return <IconCheckmarkSmall className="wds-banner-notification__icon-mark" />;
        default:
            return <IconFlagSmall className="wds-banner-notification__icon-mark" />;
    }
}

export function getClassName(type) {
    switch (type) {
        case ('alert'):
            return 'wds-alert';
        case ('warning'):
            return 'wds-warning';
        case ('success'):
            return 'wds-success';
        default:
            return 'wds-message';
    }
}

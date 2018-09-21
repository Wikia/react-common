import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import * as sprite from 'design-system/dist/svg/sprite.svg';

const IconSprite = () => (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: sprite.default }} />
);

export default IconSprite;

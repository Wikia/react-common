import React from 'react';

import * as sprite from 'design-system/dist/svg/sprite.svg'; // eslint-disable-line import/no-extraneous-dependencies

const IconSprite = () => (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: sprite.default }} />
);

export default IconSprite;

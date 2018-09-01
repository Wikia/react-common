import React from 'react';

import * as sprite from 'design-system/dist/svg/sprite.svg';

const IconSprite = () => (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: sprite.default }} />
);

export default IconSprite;

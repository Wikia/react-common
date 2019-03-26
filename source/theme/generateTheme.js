import * as deepmerge from 'deepmerge';

import defaultTheme from './index';

const generateTheme = (customization = {}) => deepmerge.all([defaultTheme, customization]);
export default generateTheme;

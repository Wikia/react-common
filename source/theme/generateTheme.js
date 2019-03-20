import * as deepmerge from 'deepmerge';

import defaultTheme from './index';

const generateTheme = (customization = {}) => deepmerge(defaultTheme, customization);
export default generateTheme;

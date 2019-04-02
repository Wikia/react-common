import merge from 'lodash/merge';

import defaultTheme from './index';

const generateTheme = (customization = {}) => merge({}, defaultTheme, customization);
export default generateTheme;

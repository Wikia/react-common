import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line import/no-extraneous-dependencies
import Enzyme from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';

import theme from '../source/theme';

Enzyme.configure({ adapter: new Adapter() });

global.mockComponent = name => props => <mocked-component name={name} {...props} />;

global.mountWithThemeProvider = child => Enzyme.mount(<ThemeProvider theme={theme}>{child}</ThemeProvider>);

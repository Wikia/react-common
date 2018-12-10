import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mountWithStore } from 'enzyme-redux';

import StoreModel from './StoreModel';
import BannerNotifications from './component';

jest.mock('../../components/BannerNotifications', () => mockComponent('BannerNotifications'));

test('BannerNotifications renders component', () => {
    const component = mountWithStore(<BannerNotifications />, createMockStore({
        FandomBannerNotifications: StoreModel.empty(),
    }));
    expect(component.render()).toMatchSnapshot();
});

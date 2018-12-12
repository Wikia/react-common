import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mountWithStore } from 'enzyme-redux';

import StoreModel from './StoreModel';
import BannerNotificationsComponent from './BannerNotificationsComponent';

jest.mock('../../components/BannerNotifications', () => mockComponent('BannerNotifications'));

test('BannerNotifications renders component', () => {
    const component = mountWithStore(<BannerNotificationsComponent />, createMockStore({
        BannerNotificationsStore: StoreModel.empty(),
    }));
    expect(component.render()).toMatchSnapshot();
});

import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { mountWithStore } from 'enzyme-redux';
import { Provider } from 'react-redux';

import StoreModel from './StoreModel';
import BannerNotificationsComponent from './BannerNotificationsComponent';

jest.mock('../../components/BannerNotifications', () => mockComponent('BannerNotifications'));

test('BannerNotifications renders component', () => {
    const store = createMockStore({
        BannerNotificationsStore: StoreModel.empty(),
    });

    const component = mountWithStore(
        <Provider store={store}>
            <BannerNotificationsComponent />
        </Provider>,
        store
    );

    expect(component.render()).toMatchSnapshot();
});

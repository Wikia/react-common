This is system that controlls the state of site notifications, allows to add them via actions, and outputs them to a component.

It supports plaintext messages and automatically handles dismissing actions when the &Cross; icon is clicked on the notification.

## Requirements

The BannerNotification system requires:

- `redux` (and `react-redux`)
- `immutable`

## Installation

There are few parts that need to be plugged into place:

### Reducer

The reducer/store need to be included in Redux.

Example:

```js static
import { BannerNotificationsStore } from '@wikia/react-common/systems/BannerNotifications';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    BannerNotificationsStore,
});

export default rootReducer;
```

### Component

The component that connects to the Redux state needs to be included on the page somewhere so the notifications are visible.

```js static
import React from 'react';
import PropTypes from 'prop-types';
import FandomContentWell from '@wikia/react-common/components/FandomContentWell';
import { BannerNotificationsComponent } from '@wikia/react-common/systems/BannerNotifications';

class PageLayout extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    }

    render() {
        return (
            <FandomContentWell>
                <BannerNotificationsComponent />
                {children}
            </FandomContentWell>
        );
    }
}

export default PageLayout;
```

**NOTE**: Remember to also include styles!

```css static
@import "~@wikia/react-common/systems/BannerNotifications.css";
```

## API

BannerNotifications system exports few actions that should be used to add new notifications:

- `addAlert(text, [id])`
- `addWarning(text, [id])`
- `addSuccess(text, [id])`
- `addMessage(text, [id])`

The `id` is optional and it's needed only when the notification needs to be manually removed with `removeNotfication(id)` action. If omitted its value is assigned automatically.

Types of notifications are shown in [components/BannerNotification](https://wikia.github.io/react-common/#bannernotification) section.

Example usage in thunk:

```js static
import axios from 'axios';
import { addAlert } from '@wikia/react-common/systems/BannerNotifications';

export const loadData = () => (
    async dispatch => {
        try {
            const response = await axios({
                method: 'get',
                url: `/api/get-data`,
            });
            //...
        } catch (error) {
            dispatch(addAlert('Error loading data from the server'));
            console.error(error);
        }
    }
);
```

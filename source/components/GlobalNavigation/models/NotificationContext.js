import React from 'react';

const NotificationsContext = React.createContext({});

export default NotificationsContext;

export const NotificationsProvider = NotificationsContext.Provider;
export const NotificationsConsumer = NotificationsContext.Consumer;

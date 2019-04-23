import React from 'react';

const I18nNamespaceContext = React.createContext(null);

export default I18nNamespaceContext;

export const I18nNamespaceProvider = I18nNamespaceContext.Provider;
export const I18nNamespaceConsumer = I18nNamespaceContext.Consumer;

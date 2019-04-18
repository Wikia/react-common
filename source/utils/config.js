export function isBrowser() {
    return typeof window !== 'undefined';
}

export function isFandomCom() {
    if (isBrowser() && window.location && window.location.hostname) {
        return window.location.hostname.includes('fandom.com');
    }

    // doesn't work on SSR
    return false;
}

export const IS_PRODUCTION_APP = process.env.NODE_ENV === 'production';
export const SERVICES_BASE_URL = isFandomCom() ? 'https://services.fandom.com/' : 'https://services.fandom-dev.us/';
export const EVENT_LOGGER_BASE = `${SERVICES_BASE_URL}event-logger`;

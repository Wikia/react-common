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

export function isProduction() {
    return process.env.NODE_ENV === 'production';
}

export function getServicesBaseURL() {
    return isFandomCom() ? 'https://services.fandom.com/' : 'https://services.fandom-dev.us/';
}

export function getEventLoggerBase() {
    return `${getServicesBaseURL()}event-logger`;
}

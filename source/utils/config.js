function isFandomCom() {
    if (window && window.location && window.location.hostname) {
        return window.location.hostname.includes('fandom.com');
    }

    // doesn't work on SSR
    return false;
}

// true if hosted on fandom.com
const IS_PRODUCTION_APP = process.env.env === 'production';

const SERVICES_BASE_URL = isFandomCom() ? 'https://services.fandom.com/' : 'https://services.fandom-dev.us/';

const config = {
    isFandomCom,
    IS_PRODUCTION_APP,
    SERVICES_BASE_URL,
    EVENT_LOGGER_BASE: `${SERVICES_BASE_URL}event-logger`,
};

export default config;

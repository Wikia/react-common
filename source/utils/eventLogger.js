import config from './config';

const { EVENT_LOGGER_BASE } = config;

export default function logErrorEvent(app, version, name, data = {}) {
    // eslint-disable-next-line no-restricted-globals
    if (!self.fetch) {
        console.error('Env does not have fetch');
        return;
    }

    fetch(`${EVENT_LOGGER_BASE}/error`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({
            name,
            description: JSON.stringify(data),
            client: app,
            client_version: version,
        }), // body data type must match "Content-Type" header
    }).catch(() => { console.error('Event logging error'); });
}
import merge from "lodash/merge";

const defaultOptions = {
    credentials: 'include',
};

class Api {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    getServiceUrl(serviceName, url) {
        return `${this.serviceUrl}${serviceName}${url}`;
    }

    getNotificationServiceUrl(path) {
        return this.getServiceUrl('on-site-notifications', path);
    }

    fetchFromService(url, options) {
        return fetch(url, merge({}, options, defaultOptions))
            .catch((error) => {
                // do error handling
            })
            .then((response) => {
                const contentType = response.headers.get('content-type');

                if (
                    response.ok &&
                    (
                        response.status === 204 ||
                        contentType && contentType.indexOf('json') === -1
                    )
                ) {
                    return null;
                } else if (response.ok) {
                    return response.json();
                } else {
                    // do error handling
                }
            });
    }

    fetchFromNotificationService(path, options) {
        return this.fetchFromService(this.getNotificationServiceUrl(path), options);
    }
}

The `utils/config.js` offers a few environment config helpers including detection of browser


Usage:

```js static
import { isBrowser, isFandomCom, SERVICES_BASE_URL, IS_PRODUCTION_APP, EVENT_LOGGER_BASE } from '@wikia/react-common/utils/config';

IS_PRODUCTION_APP;      // checks if the app was built with the production flag (might not be in a prod env though)

isBrowser();            // checks if the window global is available 
isFandomCom();          // used to determine the end points for services 

SERVICES_BASE_URL;      // gives the correct services url base on the environment
EVENT_LOGGER_BASE;      // correct event logger url
```


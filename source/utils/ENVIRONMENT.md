The `utils/environment.js` offers a few environment config helpers including detection of browser and service urls based on the env. 

Usage:

```js static
import { isBrowser, isFandomCom, getServicesBaseURL, isProduction, getEventLoggerBase } from '@wikia/react-common/utils/environment';

isProduction();         // checks if the app was built with the production flag (might not be in a prod env though)
isBrowser();            // checks if the window global is available 
isFandomCom();          // used to determine the end points for services 

getServicesBaseURL();   // gives the correct services url base on the environment
getEventLoggerBase();   // correct event logger url
```


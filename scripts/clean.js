const rimraf = require('rimraf');

// remove built files
rimraf.sync('./assets/');
rimraf.sync('./components/');
rimraf.sync('./dist/');
rimraf.sync('./hocs/');
rimraf.sync('./hooks/');
rimraf.sync('./icons/');
rimraf.sync('./models/');
rimraf.sync('./systems/');
rimraf.sync('./theme/');
rimraf.sync('./utils/');

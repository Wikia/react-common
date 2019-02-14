const rimraf = require('rimraf');

// remove built files
rimraf.sync('./dist/');
rimraf.sync('./assets/');
rimraf.sync('./components/');
rimraf.sync('./hocs/');
rimraf.sync('./icons/');
rimraf.sync('./models/');
rimraf.sync('./systems/');

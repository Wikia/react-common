const rimraf = require('rimraf');

const config = require('../config/config');

// remove built docs and package.json
rimraf.sync('../docs');
rimraf.sync('../package.json');

// remove existing built files
config.sourceDirectories.forEach(
    directory => rimraf.sync(`../${directory}`)
);

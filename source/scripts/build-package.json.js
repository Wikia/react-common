const fs = require('fs');

const config = require('../config/config');

// read source file
const source = require('../package.json');

console.log(`Updating ${source.name} to version ${source.version}:`);

// those dependencies will end up in `peerDependencies`
const peerDependencies = config.externalDependencies.map(
    dependency => source.dependencies[dependency] && `"${dependency}": "${source.dependencies[dependency]}"`
).filter(x => x).join(',\n    ');

// output relevant data to the new file
const template = `{
  "name": "${source.name}",
  "version": "${source.version}",
  "description": "${source.description}",
  "license": "UNLICENSED",
  "private": true,
  "peerDependencies": {
    ${peerDependencies}
  }
}`;

console.log(template);

// write template to the file
fs.writeFileSync(`${__dirname}/../../package.json`, template);

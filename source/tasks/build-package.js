#!/usr/bin/env node

const fs = require('fs');

// read source file
const source = require('../package.json');

console.log(`Updating ${source.name} to version ${source.version}:`);

// those dependencies will end up in `peerDependencies`
const dependencies = [
    'prop-types',
    'react',
    'react-dom',
];

const peerDependencies = dependencies.map(
    dependency => `"${dependency}": "${source.dependencies[dependency]}"`
).join(',\n    ');

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

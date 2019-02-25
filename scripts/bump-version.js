const fs = require('fs');
const semver = require('semver');

const source = require('../package.json');
const version = process.argv.length === 3 ? process.argv[2] : 'patch';

console.log(process.argv[2]);

const target = {
    ...source,
    version: semver.inc(source.version, version),
};

console.log(`Updating ${source.version} to version ${target.version}.`);

// write template to the file
fs.writeFileSync(`${__dirname}/../package.json`, `${JSON.stringify(target, null, 2)}\n`);

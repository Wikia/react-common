const fs = require('fs');
const semver = require('semver');

const source = require('../package.json');
const additionalArgs = [];
let version = process.argv.length === 3 ? process.argv[2] : 'patch';

if (version === 'test') {
    // semver lib requires second argument to be "prerelease" for this kind of operations
    version = 'prerelease'
    additionalArgs.push('test')
}

console.log(process.argv[2]);

const target = {
    ...source,
    version: semver.inc(source.version, version, ...additionalArgs),
};

console.log(`Updating ${source.version} to version ${target.version}.`);

// write template to the file
fs.writeFileSync(`${__dirname}/../package.json`, `${JSON.stringify(target, null, 2)}\n`);

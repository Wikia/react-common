const { exec } = require('child_process');

const { version } = require('../package.json');

console.log(`Creating tag for version ${version}.`);

const command = `git commit -m "${version}" && git tag -m "${version}" -a ${version} -s`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stdout && stdout.length > 0) {
        console.log(`stdout: ${stdout}`);
    }
    if (stderr && stderr.length > 0) {
        console.log(`stdout: ${stderr}`);
    }
});

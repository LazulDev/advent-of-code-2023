import { exec } from 'child_process'

const args = process.argv.slice(2)

const dayArg = args.find(arg => arg.startsWith('--day='));
const isWatchMode = args.some(arg => arg.startsWith('--watch'));

if (dayArg) {
    const day = dayArg.split('=')[1];


    const command = `node src/day/${day}/main.js`;
    const commandArgs = isWatchMode ? [ '--watch'] : []

    console.log(command);
    console.log(commandArgs);

    // FIXME: fix watch mode
    exec(command, commandArgs, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
} else {
    console.log('Please enter a day passing --day=numDay to this command.');
}

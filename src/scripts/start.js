import { exec } from "child_process"

const args = process.argv.slice(2)

const dayArg = args.find(arg => arg.startsWith('--day='));

if (dayArg) {
    const day = dayArg.split('=')[1];

    exec(`node src/day/${day}/main.js`, (error, stdout, stderr) => {
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

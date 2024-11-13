import fs from 'node:fs';
import { algorithm } from './algorithm.js';

// TODO: parametrizar entrada de main
// TODO: extraer main a archivo común
function main() {
    const calibrationDocument = fs.readFileSync('assets/day/1/input.txt', 'utf8')
    const result = algorithm(calibrationDocument)
    console.log(result)
}
main()

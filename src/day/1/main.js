import fs from 'node:fs';
import { algorithm } from './algorithm';


function main() {
    const calibrationDocument = fs.readFileSync('assets/day/1/input.txt', 'utf8')
    const result = algorithm(calibrationDocument)
    console.log(result)
}
main()

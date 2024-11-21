import fs from "node:fs";

export default function getInput({day}) {
   return fs.readFileSync(`assets/day/${day}/input.txt`, 'utf8')
}

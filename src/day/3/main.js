import algorithm from "./algorithm.js";
import getInput from "../../utils/get-input.js";

function main() {
    const input = getInput({day: 3})
    const result = algorithm(input)
    console.log('Part 1: ', result.part1)
    console.log('Part 2: ', result.part2)

}
main()

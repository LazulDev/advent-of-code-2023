import sumArray from "../../utils/sum-array.js";
import reverseString from "../../utils/reverse-string.js";
import {getLines} from "../../utils/get-lines.js";

const NUMERIC_CHAR_REGEX = '[1-9]'
export function algorithm(input) {
    const lines = getLines(input)
    const firstCharacters = lines
        .map(line => line.at(line.search(NUMERIC_CHAR_REGEX)))
    const lastCharacters = lines
        .map(line => reverseString(line))
        .map(line => line.at(line.search(NUMERIC_CHAR_REGEX)))

    const linesDigit = []
    lines.forEach((_, index) => {
        linesDigit.push(firstCharacters[index]+lastCharacters[index])
    })
    return sumArray(linesDigit.map(str => +str))
}


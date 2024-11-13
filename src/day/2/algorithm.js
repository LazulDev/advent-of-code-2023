import sumArray from "../../utils/sum-array.js";

const NUMERIC_OR_CHAR_NUMBER_REGEX = '[1-9]|one|two|three|four|five|six|seven|eight|nine';
export default function algorithm(calibrationDocument) {
    // TODO implement
    const lines = calibrationDocument.split('\n')
    const firstCharacters = lines
        .map(line => line.at(line.search(NUMERIC_OR_CHAR_NUMBER_REGEX)))
    const lastCharacters = lines
        .map(line => line.at(line.search(NUMERIC_OR_CHAR_NUMBER_REGEX)))
    console.log(firstCharacters)
    console.log(lastCharacters)
    const linesDigit = []
    lines.forEach((_, index) => {
        linesDigit.push(firstCharacters[index]+lastCharacters[index])
    })
    
    return sumArray(linesDigit.map(str => +str))
}

// Idea
const CHAR_TO_NUMBER_MAP = {
   zero: 0,
   one: 1,
   two: 2,
   three: 3,
   four: 4,
   five: 5,
   six: 6,
   seven: 7,
   eight: 8,
   nine: 9,
}

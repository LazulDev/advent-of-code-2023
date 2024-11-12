import fs from 'node:fs';

/*const EXAMPLE_CALIBRATION_DOCUMENT = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`*/
const NUMERIC_CHAR_REGEX = '[1-9]'

function main() {
    const calibrationDocument = fs.readFileSync('assets/day/1/input.txt', 'utf8')
    const result = algorithm(calibrationDocument)
    console.log(result)
}
main()

function algorithm(calibrationDocument) {
    const lines = calibrationDocument.split('\n')
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

// TODO move to utils

function reverseString(input) {
    return input.split("").reverse().join("")
}

function sumArray(arr) {
    let sum = 0
    arr.forEach(res => {
        sum += res
    })
    return sum
}